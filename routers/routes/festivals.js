const express = require("express");
const {
  addFestivals,
  getFestivals,
  delFestivals,
} = require("./../controllers/festivals.js");
const festivals = express.Router();

festivals.post("/add", addFestivals);
festivals.get("/get", getFestivals);
festivals.delete("/get", delFestivals);

module.exports = festivals;
