const express = require("express");
const {
  addFestivals,
  getFestivals,
  delFestivals,
} = require("./../controllers/festivals.js");
const hotels = express.Router();

hotels.post("/add", addFestivals);
hotels.get("/get", getFestivals);
hotels.delete("/get", delFestivals);

module.exports = hotels;
