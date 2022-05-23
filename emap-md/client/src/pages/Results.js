import React from "react";
import { Box } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

function Results(props) {
  console.log(props.location.state);
  return (
    <div
      style={{
        backgroundColor: "#272727",
        minHeight: "100vh",
      }}
    >
      <NavBar page="dashboard" />
      <div
        style={{
          margin: "auto",
          width: "100%",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <Box
          boxShadow={1}
          color="text.primary"
          style={{
            margin: "auto",
            width: "1000px",
            height: "1000px",
            backgroundColor: "white",
            padding: "50px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Entrepreneurial Mindset Report
          </Typography>
          <Typography variant="h3" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="h4" gutterBottom>
            30/12/20
          </Typography>
          <Divider></Divider>
          <pre>{JSON.stringify(props.location.state, null, "\t")}</pre>
        </Box>
      </div>
    </div>
  );
}

export default Results;
