var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const ApiKey = "bc2157c177d0798733956d26e83099ea";
let weather = [{ cityName: "London" }, { cityName: "Paris" }];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//? Add a new city with its own weather data
router.post("/weather", (req, res) => {
  const newCityName = req.body.cityName;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${ApiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        res.json({
          result: true,
          data: data,
        });
      } else {
        res.json({
          result: false,
          error: data.message,
        });
      }
    })
    .catch((error) => {
      res.json({
        result: false,
        error: error.message,
      });
    });
});

module.exports = router;
