const express = require("express");
const {
  addTransportation,
  getTransportation,
  updateTransportation,
  delTransportation,
} = require("./../controllers/transportation.js");
const transportation = express.Router();

transportation.post("/add", addTransportation);
transportation.put("/update", updateTransportation);
transportation.get("/get", getTransportation);
transportation.delete("/del", delTransportation);

module.exports = transportation;
