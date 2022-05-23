import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.js";
import LandingImage from "../resources/LandingImage.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FittedImage from "react-fitted-image";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    width: "100%",
    height: "calc(100vh - 17vh)", //full page - header - footer
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  landingText: {
    position: "absolute",
    width: "100%",
    height: "80vh",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
}));

export function LoggedIn() {
  const classes = useStyles();
  const [user, setUser] = useState("loading");

  useEffect(() => {
    let getUser;
    if (process.env.NODE_ENV === "production") {
      //production route
    } else {
      getUser = "/api/user";
    }
    fetch(getUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const render = () => {
    if (user === "loading") {
      return (
        <div className="spinner">
          <CircularProgress />
        </div>
      );
    } else if (user != "loading") {
      return (
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box className={classes.landingText}>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Grid item xs={6}>
                    <Typography variant="h2" align="center">
                      Welcome Back {user.name}{" "}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h4" align="center">
                      It has been 257 days since you last completed the survey{" "}
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Box paddingRight={2} pt={2}>
                      <Button
                        // onClick={() => { alert('clicked') }}
                        component={Link}
                        to={"/questions"}
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.margin}
                      >
                        Retake Survey
                      </Button>
                    </Box>

                    <Box pt={2}>
                      <Button
                        onClick={() => {
                          alert("Past Results");
                        }}
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.margin}
                      >
                        View Past Results
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <NavBar page="dashboard" />
      {render()}
      <Box className={classes.landingImage}>
        <FittedImage
          fit="cover"
          loader={<div>Loading</div>}
          onLoad={(...args) => console.log(...args)}
          onError={(...args) => console.log(...args)}
          src={LandingImage}
        />
      </Box>

      <Footer />
    </div>
  );
}

export default LoggedIn;
