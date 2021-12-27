const express = require("express");
const {
  addFlights,
  getFlights,
  delFlights,
  updateFlights,
} = require("./../controllers/flights.js");
const flights = express.Router();

flights.post("/add", addFlights);
flights.put("/update", updateFlights);
flights.get("/get", getFlights);
flights.delete("/del", delFlights);

module.exports = flights;
