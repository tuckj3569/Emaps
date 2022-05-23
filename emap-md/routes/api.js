var express = require("express");
var router = express.Router();

router.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

module.exports = router;
