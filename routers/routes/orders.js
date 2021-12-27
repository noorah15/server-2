const express = require("express");
const { addOrder, getOrders, delOrder } = require("./../controllers/orders.js");
const touristGuides = express.Router();

touristGuides.post("/add", addOrder);
touristGuides.get("/get", getOrders);
touristGuides.delete("/del", delOrder);

module.exports = touristGuides;
