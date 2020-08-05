import React from "react";
import auth from "../services/auth";
import { Route, Redirect } from "react-router-dom";

/**
 * Represents a Protected Route HOC for making routes protected based on authentication
 * @param {component} component - Receives wrapped component
 * @param {object} rest - Receives rest of child components props
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAutenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
