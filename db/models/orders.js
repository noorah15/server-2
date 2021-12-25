const mongoose = require("mongoose");

const orders = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "destinations" },
  hotelInfoId: { type: mongoose.Schema.Types.ObjectId, ref: "hotelInfo" },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("orders", orders);
