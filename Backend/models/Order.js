const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  shipping_cost: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
  },
  payment_status: {
    type: String,
    default: "Pending",
  },
  delivery_status: {
    type: String,
    default: "Not Delivered",
  },
  transaction_id: {
    type: String,
  },
  total_price: {
    type: Number,
  },
  delivery_date: {
    type: Date,
    default: function () {
      const createdAt = this.created_at || new Date();
      return new Date(createdAt.getTime() + 5 * 24 * 60 * 60 * 1000);
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrdersSchema);
