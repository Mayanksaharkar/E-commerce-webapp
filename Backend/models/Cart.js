const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  customer_id: {
    type: String,
  },
  product_id: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
