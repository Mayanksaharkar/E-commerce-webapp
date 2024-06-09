const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  customer_id: {
    type: String,
  },
  product_ids: {
    type: Array,
  },
  quantity: {
    type: Number,
  },
  total_price: {
    type: Number,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
