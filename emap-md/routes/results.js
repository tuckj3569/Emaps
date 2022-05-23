var express = require("express");
var router = express.Router();
var passport = require("passport");
var db = require("../db");

router.get("/", function (req, res) {
  if (req.user) {
    console.log(req.user);
    return res.status(200).json({ success: true });
  } else {
    return res.status(404).json({ success: false });
  }
});

router.post("/", function (req, res) {
  //console.log(req.body.results);

  //insert results into database

  //calculate results
  let questionCount = Object.keys(req.body.results.E).length;
  let count = 0;
  for (i = 1; i <= questionCount; i++) {
    count += parseInt(req.body.results.E[i]);
  }
  console.log(count);

  //return results to front end

  //User AUthentication
  // if (req.user) {
  //   console.log(req.user);
  //   return res.status(200).json({ success: true });
  // } else {
  //   return res.status(404).json({ success: false });
  // }
  return res.status(200).json({ success: true });
});

module.exports = router;
