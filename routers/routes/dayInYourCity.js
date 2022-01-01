const express = require("express");
const {
  addDayInYourCity,
  getDayInYourCity,
  getDayInYourCityById,
  delDayInYourCity,
  getTop,
} = require("./../controllers/dayInYourCity.js");
const authentication = require("../middlewares/authentication");
const {
  adminAuthorization,
  userAuthorization,
  adminAndUserAuthorization,
} = require("../middlewares/authorization");

const dayInYourCity = express.Router();

dayInYourCity.post(
  "/add",
  authentication,
  adminAuthorization,
  addDayInYourCity
);
//destinations.put("/update", updateDestination);
dayInYourCity.get("/get", getDayInYourCity);
dayInYourCity.get("/getDayInYourCityById/:id", getDayInYourCityById);
dayInYourCity.get("/getTop", getTop);
// destinations.get("/getDestinationByCatg/:catg", getDestinationByCatg);
// destinations.get("/getDestinationByDays/:days", getDestinationByDays);
// destinations.get("/getDestinationByCity/:city", getDestinationByCity);
dayInYourCity.delete(
  "/del",
  authentication,
  adminAuthorization,
  delDayInYourCity
);

module.exports = dayInYourCity;
