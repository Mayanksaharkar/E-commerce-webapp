const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchema = new Schema({
  payment_id: {
    type: String,
    required: true,
    unique: true,
  },
  payment_status: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Payments", PaymentSchema);
