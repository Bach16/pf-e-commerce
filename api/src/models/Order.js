const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id_pay: {
    type: String,
  },
  items: {
    type: Array,
  },
  date_approved: {
    type: String,
  },
  operation_type: {
    type: String,
  },
  order: {
    type: Array,
  },
  payer: {
    type: Array,
  },
  status: {
    type: String,
  },
  status_detail: {
    type: String,
  },
  statusProduct: {
    type: String,
    enum: ["delivered", "undelivered"],
    default: "undelivered",
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);

