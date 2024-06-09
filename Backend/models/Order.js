const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  product_ids: {
    type: Array,
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  address: {
    type: String,
    ref: "Users",
  },
  status: {
    type: String,
    default: "Pending",
  },
  quantity: {
    type: Number,
  },
  transaction_id: {
    type: String,
  },
  total_price: {
    type: Number,
  },
});

module.exports = mongoose.model("Order", OrdersSchema);
