import React, { useState, useEffect } from "react";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import { Box, CircularProgress } from "@material-ui/core";
import Login from "./pages/Login.js";
import Survey from "./pages/Survey.js";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import testQuestions from "./pages/TestQuestions";
import { isLoggedIn } from "./utils/isLoggedIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    console.log("here");
    isLoggedIn().then((success) => {
      setStatus(success ? "valid" : "invalid");
    });
  }, []);
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (status === "loading") {
            return <CircularProgress />;
          } else if (status === "valid") {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  const HomeRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (status === "loading") {
            return <CircularProgress />;
          } else {
            console.log(status);
            return <Component {...props} isLoggedIn={status} />;
          }
        }}
      />
    );
  };
  return (
    <Router>
      <Switch>
        <Box>
          <HomeRoute Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/survey" component={Survey} />
          {/* need to convert to private route on production */}
          <Route path="/questions" component={Questions} />
          <Route path="/results" component={Results} />
          <Route path="/testquestions" component={testQuestions} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Box>
      </Switch>
    </Router>
  );
}

export default App;
