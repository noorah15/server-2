const express = require("express");
const {
  addTouristGuides,
  getTouristGuides,
  delTouristGuides,
} = require("./../controllers/touristGuides.js");
const touristGuides = express.Router();

touristGuides.post("/add", addTouristGuides);
touristGuides.get("/get", getTouristGuides);
touristGuides.delete("/del", delTouristGuides);

module.exports = touristGuides;
