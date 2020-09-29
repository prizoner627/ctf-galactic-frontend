import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const AdminRoute = ({ component: Component, authenticated, ...rest }) => {

  const token = Cookies.get("access_token");

  let decodedToken = jwt_decode(token);

  console.log(decodedToken.admin);
  return (
    <Route
      render={(props) =>
        decodedToken.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  );
};

export default AdminRoute;
