import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticationService } from "../_services";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = authenticationService.currentUser;
        if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{
                pathname: "/log-in",
                state: { from: props.location },
              }}
            />
          );
        }
        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};
