const mongoose = require("mongoose");

const festivals = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  imges: { type: Array, required: true },
  cost: { type: Number, required: true },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("festivals", festivals);
