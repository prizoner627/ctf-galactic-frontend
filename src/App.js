import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./pages/Home";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Planets from "./pages/Planets";
import AuthRoute from "./util/AuthRoute";
import AdminRoute from "./util/AdminRoute";
import Admin from "./pages/Admin";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'Poppins', sans-serif",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
    },
    p: {
      fontFamily: "'Poppins', sans-serif",
    },
    button: { fontFamily: "AirbnbCerealBook" },
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#FFe81F",
    },
  },
  root: {
    '& label.Mui-focused': {
      color: "#FFe81F",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#FFe81F",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#FFe81F",
      },
      '&:hover fieldset': {
        borderColor: "#FFe81F",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#FFe81F",
      },
    },
  },
});

const App = () => {
  const token = Cookies.get("access_token");
  console.log("rendering");

  return (
    <div>
       <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute
            path="/starships"
            component={Starships}
            token={token}
          />
          <AuthRoute
            path="/vehicles"
            component={Vehicles}
            token={token}
          />
          <AuthRoute
            path="/planets"
            component={Planets}
            token={token}
          />
           <AdminRoute
            path="/admin"
            component={Admin}
            token={token}
          />
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
