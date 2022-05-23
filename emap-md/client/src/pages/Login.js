import React from "react";
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { ReactComponent as GoogleIcon } from "../resources/google-icon.svg";
import LandingImage from "../resources/LandingImage.png";
import FittedImage from "react-fitted-image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Login() {
  const GoogleSignIn = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.landingImage}>
        <FittedImage
          fit="cover"
          loader={<div>Loading</div>}
          onLoad={(...args) => console.log(...args)}
          onError={(...args) => console.log(...args)}
          src={LandingImage}
        />
      </Box>{" "}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box boxShadow={1} px={8} py={4} bgcolor="#ffffff">
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Button
                variant="contained"
                p={3}
                fullWidth={true}
                style={{ justifyContent: "left", backgroundColor: "#fff" }}
                startIcon={<GoogleIcon />}
                onClick={GoogleSignIn}
              >
                Sign in with Google
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                p={3}
                startIcon={<LinkedInIcon />}
                fullWidth={true}
                style={{
                  justifyContent: "left",
                  backgroundColor: "#2867B2",
                  color: "#FFF",
                }}
              >
                Sign in with LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                p={3}
                fullWidth={true}
                startIcon={<FacebookIcon />}
                style={{
                  justifyContent: "left",
                  backgroundColor: "#4267B2",
                  color: "#FFF",
                }}
              >
                Sign in with Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                p={3}
                fullWidth={true}
                startIcon={<TwitterIcon />}
                style={{
                  justifyContent: "left",
                  backgroundColor: "#1DA1F2",
                  color: "#FFF",
                }}
              >
                Sign in with Twitter
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Login;
