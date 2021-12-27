const express = require("express");
const {
  addTouristGuides,
  getTouristGuides,
  delTouristGuides,
  updateTouristGuides,
} = require("./../controllers/touristGuides.js");
const touristGuides = express.Router();

touristGuides.post("/add", addTouristGuides);
touristGuides.put("/update", updateTouristGuides);
touristGuides.get("/get", getTouristGuides);
touristGuides.delete("/del", delTouristGuides);

module.exports = touristGuides;
