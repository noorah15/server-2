const express = require("express");
const {
  addHotels,
  getHotels,
  delHotel,
  updateHotels,
} = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);
hotels.put("/update", updateHotels);
hotels.get("/get", getHotels);
hotels.delete("/del", delHotel);

module.exports = hotels;
