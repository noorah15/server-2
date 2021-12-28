const express = require("express");
const {
  addTransportation,
  getTransportation,
  updateTransportation,
  delTransportation,
  getTransportationById,
  getTransportationByCity,
} = require("./../controllers/transportation.js");
const transportation = express.Router();

transportation.post("/add", addTransportation);
transportation.put("/update", updateTransportation);
transportation.get("/get", getTransportation);
transportation.get("/get/:id", getTransportationById);
transportation.get("/getByCity/:city", getTransportationByCity);
transportation.delete("/del", delTransportation);

module.exports = transportation;
