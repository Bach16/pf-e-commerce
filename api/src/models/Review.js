const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  comment: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  idProduct: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  score: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
});
module.exports = mongoose.model("Review", reviewSchema);
