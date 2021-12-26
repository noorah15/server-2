const express = require("express");
const {
  addHotels,
  getHotels,
  delHotel,
} = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);
hotels.get("/get", getHotels);
hotels.delete("/del", delHotel);

module.exports = hotels;
