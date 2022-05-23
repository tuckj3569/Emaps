import React from "react";
import { Box } from "@material-ui/core";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../modern.css";
import "../components/questions.css";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
const QuestionsJSON = require("../components/Questions.json");

var defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#43207B";
defaultThemeColors["$header-background-color"] = "#e13e64";
defaultThemeColors["$body-container-background-color"] = "#e13e64";
Survey.StylesManager.applyTheme("modern");

var myCss = {
  // matrix: {
  //   root: "table table-striped",
  // },
  navigationButton: "btn-small waves-effect waves-light",
};

function Questions() {
  const [completed, setCompleted] = useState(false);
  const onCompleteComponent = (res) => {
    //temporarily send the raw results to the results page.
    //TODO: send the results to the server
    //process the results
    //return the results and insert bellow
    setCompleted(res.data);
  };

  if (completed == false) {
    return (
      <div
        style={{
          backgroundColor: "#272727",
          minHeight: "100vh",
        }}
      >
        <NavBar page="survey" />
        <div
          style={{
            margin: "auto",
            width: "70%",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <Box boxShadow={1} color="text.primary">
            <Survey.Survey
              json={QuestionsJSON}
              showCompletedPage={false}
              showProgressBar="top"
              css={myCss}
              onComplete={onCompleteComponent}
            />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect to={{ pathname: "/results", state: completed }}></Redirect>
    );
  }
}

export default Questions;
