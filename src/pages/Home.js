import React, { useState } from "react";

import axios from "axios";
import Cookies from "js-cookie";
import twi from "../assets/twi.png";
import { Container, TextField, Grid,Button } from "@material-ui/core";

export default function Home(props) {
  const [key, setKey] = useState("");
  const [flag, setFlag] = useState("");

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    //please remove this key after server implementation : hail_darthvader

    axios
      .post("http://localhost:5000", { key: key })
      .then((response) => {
        console.log(response.data.flag);
        setFlag(response.data.flag);

        Cookies.set("access_token", `Bearer ${response.data.token}`);
        // props.history.push("/starships")
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setKey(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", color: "white" }}>
      <Grid container direction="row">
        <Grid item>
          <form onSubmit={onSubmit}>
            <h1>Welcome to the Galactic Empire</h1>

            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              value={key}
              style={{ color: "white" }}
            />
            <p>Enter your secret</p>
            <Button type="submit" variant="contained" color="primary">
              Enter
            </Button>

            {flag ? <h2>{flag}</h2> : null}
          </form>
        </Grid>
        <Grid item>
          <p style={{ marginTop: 600 }}>
            this website is created by hail_darth_vadar909
            <img
              src={twi}
              alt="twitter"
              style={{ width: "24px", marginLeft: "24px" }}
            />
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
