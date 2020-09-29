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

export default function Planets() {
  const classes = useStyles();

  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const token = Cookies.get("access_token");

    const headers = {
      Authorization: token,
    };

    axios
      .get("http://localhost:5000/planets/",{ headers: headers })
      .then((res) => {
        console.log(res);
        setShips(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(ships);

  if (!loading) {
    return (
      <Container
        maxWidth="md"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Grid container md={12} style={{ marginBottom: "25px" }}>
          <Typography variant="h3" component="p">
            Planets
          </Typography>
        </Grid>

        <Grid container md={12}>
          {ships.map((ship) => {
            return (
              <Grid item md={6} style={{ padding: "10px" }}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Climate: {ship.climate}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {ship.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Climate: {ship.climate}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Terrain: {ship.terrain}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Population: {ship.population}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  } else {
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
        Loading ...
      </Container>
    );
  }
}
