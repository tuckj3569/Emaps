import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  alignItemsAndJustifyContent: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43207B',
    }
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Box className={classes.alignItemsAndJustifyContent}>
            <Box m="auto">
              <Typography variant="text1">
                Mass Diplomacy © Copyright 2020
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}
