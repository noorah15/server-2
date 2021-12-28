const express = require("express");
const {
  addFlights,
  getFlights,
  getFlightsById,
  getFlightsByCity,
  delFlights,
  updateFlights,
} = require("./../controllers/flights.js");
const flights = express.Router();

flights.post("/add", addFlights);
flights.put("/update", updateFlights);
flights.get("/get", getFlights);
flights.get("/get/:id", getFlightsById);
flights.get("/getByCity/:from/:to", getFlightsByCity);
flights.delete("/del", delFlights);

module.exports = flights;
