const express = require("express");
const {
  addDestinations,
  getDestinations,
  getDestinationById,
  getDestinationByCatg,
  getDestinationByDays,
  getDestinationByCity,
  delDestination,
} = require("./../controllers/destinations.js");
const destinations = express.Router();

destinations.post("/add", addDestinations);
destinations.get("/get", getDestinations);
destinations.get("/getDestinationById/:id", getDestinationById);
destinations.get("/getDestinationByCatg/:catg", getDestinationByCatg);
destinations.get("/getDestinationByDays/:days", getDestinationByDays);
destinations.get("/getDestinationByCity/:city", getDestinationByCity);
destinations.delete("/del", delDestination);

module.exports = destinations;
