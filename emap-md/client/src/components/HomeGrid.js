import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FittedImage from "react-fitted-image";
import LandingImage from "../resources/LandingImage.png";
import PanelImage1 from "../resources/ResearchedPanelImage.png";
import PanelImage2 from "../resources/IterativePanelImage.png";
import PanelImage3 from "../resources/SecurePanelImage.png";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    width: "100%",
    height: 750,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  landingText: {
    position: "absolute",
    width: "100%",
    height: 750,
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
  panelboxpink: {
    width: "100%",
    height: 400,
    backgroundColor: "#e13e64",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
  panelboxpurple: {
    width: "100%",
    height: 400,
    backgroundColor: "#43207B",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
  panelImage: {
    width: "100%",
    height: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function HomeGrid(props) {
  const classes = useStyles();
  let [route, setRoute] = useState("/login");

  useEffect(() => {
    if (props.isLoggedIn == "valid") {
      setRoute("/dashboard");
    }
  }, []);

  return (
    <div className={classes.root}>
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
              <Grid item xs={5}>
                <Typography variant="h4" align="center">
                  Explore your mindset with the{" "}
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography variant="h2" align="center">
                  Entrepreneurial Mindset Activity Profile{" "}
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Box pt={2}>
                  <Button
                    // onClick={() => { alert('clicked') }}
                    component={Link}
                    to={route}
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                  >
                    Begin
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.landingImage}>
            <FittedImage
              fit="cover"
              loader={<CircularProgress />}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src={LandingImage}
            />
          </Box>
        </Grid>

        {/* Panel Section 1 */}
        <Grid item xs={12} sm={6}>
          <Box className={classes.panelImage}>
            <FittedImage
              fit="cover"
              loader={<CircularProgress />}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src={PanelImage1}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className={classes.panelboxpink}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid item xs={10}>
                <Typography variant="h3" align="center">
                  Researched{" "}
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography variant="body1" align="center">
                  Profile was designed utilising years of peer to peer research
                  review and scale develoment.{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Panel Section 2 */}

        <Grid item xs={12} sm={6}>
          <Box className={classes.panelboxpurple}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid item xs={10}>
                <Typography variant="h3" align="center">
                  Iterative{" "}
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography variant="body1" align="center">
                  The EMAP was designed to encourage education and begin a
                  process of continual improvement and self reflection.{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className={classes.panelImage}>
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src={PanelImage2}
            />
          </Box>
        </Grid>

        {/* Panel Section 3 */}
        <Grid item xs={12} sm={6}>
          <Box className={classes.panelImage}>
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src={PanelImage3}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className={classes.panelboxpink}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid item xs={10}>
                <Typography variant="h3" align="center">
                  Secure{" "}
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography variant="body1" align="center">
                  User information is kept secure and private. Any personal
                  details that are provided will not be shared in any way.{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
