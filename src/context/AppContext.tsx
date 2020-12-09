import React, { createContext, useContext, useReducer, useEffect } from 'react';

type UserType = {
  id: number;
  name: string;
};
type PayloadType = {
  user?: UserType;
};

type ActionType = {
  type: string;
  payload: PayloadType;
};

type StateType = {
  user: UserType;
  authenticated: boolean;
};
type DispatchType = (action: ActionType) => void;
type AppProviderProps = { children: React.ReactNode };

const initialState = {
  user: {} as UserType,
  authenticated: false,
};

const AppStateContext = createContext<StateType | undefined>(undefined);
const AppDispatchContext = createContext<DispatchType | undefined>(undefined);

function appReducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'register': {
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Check if app state stored in local memory

let appLocalState: StateType = initialState;

if (typeof window !== 'undefined') {
  const state: string = localStorage.getItem('appState') || '';
  appLocalState = JSON.parse(state);
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(
    appReducer,
    appLocalState || initialState
  );
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used with a AppProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used with an AppProvider');
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
