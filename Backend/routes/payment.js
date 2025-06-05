const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  // checkout,
  AddPaymentData,
  createOrder,
} = require("../controllers/payment_controller");

// router.post("/", protect, checkout);
router.post("/addPaymentData", protect, AddPaymentData);
router.post("/createOrder", protect, createOrder);

module.exports = router;
