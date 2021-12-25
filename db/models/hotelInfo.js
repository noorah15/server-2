const mongoose = require("mongoose");

const hotelInfo = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "hotels" },
  cost: { type: Number, required: true },
  roomType: { type: String, required: true },
});

module.exports = mongoose.model("hotelInfo", hotelInfo);
