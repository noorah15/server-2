const express = require("express");
const {
  addFlights,
  getFlights,
  delFlights,
} = require("./../controllers/flights.js");
const flights = express.Router();

flights.post("/add", addFlights);
flights.get("/get", getFlights);
flights.delete("/del", delFlights);

module.exports = flights;
