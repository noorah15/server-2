const express = require("express");
const {
  addHotels,
  addHotelInfo,
  getHotels,
} = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);
hotels.post("/addInfo", addHotelInfo);
hotels.get("/get", getHotels);

module.exports = hotels;
