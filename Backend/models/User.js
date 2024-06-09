const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    default: null,
  },
  mobile_no: {
    type: Number,
    default: null,
  },
  pincode: {
    type: Number,
    default: null,
  },
  role: {
    type: String,
    default: "customer",
  },
});

module.exports = mongoose.model("Users", UserSchema);
