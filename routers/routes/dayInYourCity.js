const express = require("express");
const {
  addDayInYourCity,
  getDayInYourCity,
  getDayInYourCityById,
  delDayInYourCity,
} = require("./../controllers/dayInYourCity.js");
const dayInYourCity = express.Router();

dayInYourCity.post("/add", addDayInYourCity);
//destinations.put("/update", updateDestination);
dayInYourCity.get("/get", getDayInYourCity);
dayInYourCity.get("/getDestinationById/:id", getDayInYourCityById);
// destinations.get("/getDestinationByCatg/:catg", getDestinationByCatg);
// destinations.get("/getDestinationByDays/:days", getDestinationByDays);
// destinations.get("/getDestinationByCity/:city", getDestinationByCity);
dayInYourCity.delete("/del", delDayInYourCity);

module.exports = dayInYourCity;
