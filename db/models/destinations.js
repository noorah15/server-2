const mongoose = require("mongoose");

const destinations = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  festivalIds: { type: Array, required: true },
  name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  cost: { type: Number, required: true },
  days: { type: Number, required: true },
  catg: { type: String, required: true, trim: true },
  isItSuitableForFamily: { type: Boolean, required: true },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("destinations", destinations);
