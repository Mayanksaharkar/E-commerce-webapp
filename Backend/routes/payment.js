const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const { checkout } = require("../controllers/peyment_controller");

router.post("/", protect, checkout);

module.exports = router;
