const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  checkout,
  AddPaymentData,
} = require("../controllers/peyment_controller");

router.post("/", protect, checkout);
router.post("/:paymentId", protect, AddPaymentData);

module.exports = router;
