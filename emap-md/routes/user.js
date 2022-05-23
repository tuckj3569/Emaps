var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  if (req.user) {
    let name = req.user.given_name;
    return res.status(200).json({ success: true, name: name });
  } else {
    return res.status(404).json({ success: false });
  }
});

module.exports = router;
