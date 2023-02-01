var express = require("express");
var router = express.Router();
const googleAPI = process.env.Google_API;

/* GEt google API */
router.get("/googleAPI", (req, res) => {
  console.log(googleAPI);
  res.json({ API: googleAPI });
});

module.exports = router;
