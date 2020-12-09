import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { AppProvider } from '../context/appContext';
import theme from '../styles/theme';

const AllTheProviders: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: { [key: string]: HTMLElement } | undefined
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
