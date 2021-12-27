const mongoose = require("mongoose");

const orders = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "destinations" },
  transportationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "transportation",
  },
  hotel: { type: Map, of: String },
  ticket: { type: Map, of: String },
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("orders", orders);
