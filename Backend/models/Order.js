const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
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
});

module.exports = mongoose.model("Order", OrdersSchema);
