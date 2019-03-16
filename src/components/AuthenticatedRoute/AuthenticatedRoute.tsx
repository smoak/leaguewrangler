import React, { SFC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router';

export interface MappedStateProps {
  readonly isAuthenticated: boolean;
}

export type AuthenticatedRouteProps = MappedStateProps & RouteProps;

const AuthenticatedRoute: SFC<AuthenticatedRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...props
}: {
  component: React.ComponentType<RouteProps>;
  isAuthenticated: boolean;
}) => {
  return (
    <Route
      {...props}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      }}
    />
  );
};

export default AuthenticatedRoute;
