const express = require("express");
const {
  addDestinations,
  getDestinations,
  delDestination,
} = require("./../controllers/destinations.js");
const destinations = express.Router();

destinations.post("/add", addDestinations);
destinations.get("/get", getDestinations);
destinations.delete("/del", delDestination);

module.exports = destinations;
