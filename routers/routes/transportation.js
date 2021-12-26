const express = require("express");
const {
  addTransportation,
  getTransportation,
  delTransportation,
} = require("./../controllers/transportation.js");
const transportation = express.Router();

transportation.post("/add", addTransportation);
transportation.get("/get", getTransportation);
transportation.delete("/del", delTransportation);

module.exports = transportation;
