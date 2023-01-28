var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const ApiKey = "bc2157c177d0798733956d26e83099ea";
let weather = [];

//? Add a new city with its own weather data
router.post("/weather", (req, res) => {
  const newCityName = req.body.cityName;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${ApiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const newCity = {
          cityName: data.name,
          description: data.weather[0].description,
          main: data.weather[0].main,
          tempsMin: data.main.temp_min,
          tempsMax: data.main.temp_max,
          lat: data.coord.lat,
          lon: data.coord.lon,
        };
        weather.push(newCity);
        res.json({ result: true, weather: newCity });
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
