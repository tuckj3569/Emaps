import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../resources/MassDiplomacyLogo.png";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    height: "7vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: "bold",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  let signOutURL;
  if (process.env.NODE_ENV === "production") {
    //production route
  } else {
    signOutURL = "/api/auth/logout";
  }
  console.log(props.isLoggedIn);
  let menuItems = [];

  if (props.page == "dashboard") {
    menuItems = [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/login",
        name: "Sign Out",
      },
    ];
  } else if (props.page == "home" && props.isLoggedIn == "valid") {
    menuItems = [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/login",
        name: "Sign Out",
      },
    ];
  } else if (props.page == "survey") {
    menuItems = [
      {
        link: "/dashboard",
        name: "Exit Survey",
      },
    ];
  } else {
    menuItems = [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/login",
        name: "Login",
      },
    ];
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff">
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="Logo" />
          <div>
            {menuItems.map((element) => {
              if (element.name == "Sign Out") {
                return (
                  <Link key={element.name} className={classes.noDecoration}>
                    <Button
                      color="primary"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                      onClick={() => {
                        fetch(signOutURL).then((res) => {
                          if (res.status == 200) {
                            window.location.href = "/";
                          }
                        });
                      }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              }
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                  >
                    <Button
                      color="primary"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              }
            })}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
