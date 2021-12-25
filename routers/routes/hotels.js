const express = require("express");
const {
  addHotels,
  addHotelInfo,
  getHotels,
  delHotel,
} = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);
hotels.post("/addInfo", addHotelInfo);
hotels.get("/get", getHotels);
hotels.delete("/get", delHotel);

module.exports = hotels;
