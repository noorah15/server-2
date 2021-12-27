const express = require("express");
const {
  addFestivals,
  getFestivals,
  delFestivals,
  updateFestivals,
} = require("./../controllers/festivals.js");
const festivals = express.Router();

festivals.post("/add", addFestivals);
festivals.put("/update", updateFestivals);
festivals.get("/get", getFestivals);
festivals.delete("/del", delFestivals);

module.exports = festivals;
