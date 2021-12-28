const express = require("express");
const {
  addTouristGuides,
  getTouristGuides,
  getTouristGuideById,
  delTouristGuides,
  updateTouristGuides,
  getTouristGuidesByCity,
} = require("./../controllers/touristGuides.js");
const touristGuides = express.Router();

touristGuides.post("/add", addTouristGuides);
touristGuides.put("/update", updateTouristGuides);
touristGuides.get("/get", getTouristGuides);
touristGuides.get("/get/:id", getTouristGuideById);
touristGuides.get("/getByCity/:city", getTouristGuidesByCity);
touristGuides.delete("/del", delTouristGuides);

module.exports = touristGuides;
