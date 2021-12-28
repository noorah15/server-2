const express = require("express");
const {
  addHotels,
  getHotels,
  delHotel,
  updateHotels,
  getHotelById,
  getDestinationByCity,
} = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);
hotels.put("/update", updateHotels);
hotels.get("/get", getHotels);
hotels.get("/get/:id", getHotelById);
hotels.get("/getByCity/:city", getDestinationByCity);
hotels.delete("/del", delHotel);

module.exports = hotels;
