import React, { useState, useEffect } from "react";

import axios from "axios";
import Cookies from "js-cookie";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Admin() {
  const classes = useStyles();

  const [command, setCommand] = useState("");

  const handleChange = (e) => {
    setCommand(e.target.value);
    console.log(e.target.value);
  };

  const token = Cookies.get("access_token");

  const headers = {
    Authorization: token,
  };

  const onSubmit = (e) => {
    e.preventDefault()
    axios.get("http://localhost:5000/command",{ headers: headers }).then((res)=> {
      console.log(res)
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <Container
      maxWidth="md"
      style={{
        alignItems: "center",
        marginTop: "50px",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <h1>Main Control Panel</h1>

        <input type="text" onChange={handleChange} value={command} />

        <p>Enter your command</p>

        <button type="submit">Enter</button>
      </form>
    </Container>
  );
}
