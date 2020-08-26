import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../contexts';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        userContext.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;