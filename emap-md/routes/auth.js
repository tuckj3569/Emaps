var express = require("express");
var router = express.Router();
var passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.get("/logout", function (req, res) {
  if (req.user) {
    req.logout();
    console.log("logged out successfully");
    return res.status(200).json({ success: true });
  } else {
    return res.status(404).json({ success: false });
  }
});

router.get("/verify", function (req, res) {
  if (req.user) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(404).json({ success: false });
  }
});

module.exports = router;
