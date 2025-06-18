const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getUserOrders, addOrder } = require("../controllers/order_controller");

router.get("/:uid", protect, getUserOrders);
router.post("/", protect, addOrder);

module.exports = router;