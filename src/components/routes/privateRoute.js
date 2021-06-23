import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {

  const authContext = useContext(AuthContext);
  const { autenticated, authUser } = authContext;

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
