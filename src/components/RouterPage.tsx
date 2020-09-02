import { RouteComponentProps } from '@reach/router';
import React from 'react';

const RouterPage: React.FC<{
  Component: (routerProps: RouteComponentProps) => JSX.Element;
} & RouteComponentProps> = ({ Component, ...routerProps }) => {
  return <>{Component(routerProps)}</>;
};

export default RouterPage;

// For Private Router
// const PrivateRouterPage: React.FC<{
//   Component: (routerProps: RouteComponentProps) => JSX.Element | null;
// } & RouteComponentProps> = ({ Component, ...routerProps }) => {
//   const { authState } = useAppState();
//   if (authState === 'loggedIn') {
//     return <>{Component(routerProps)}</>;
//   } else {
//     navigate('/');
//     return null;
//   }
// };

// export default PrivateRouterPage;
