const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  add_to_cart,
  get_cart_items,
  update_cart_item,
  remove_cart_item,
  removeItems,
} = require("../controllers/cart_controller");

router.post("/", protect, add_to_cart);
router.get("/:uid", protect, get_cart_items);
router.post("/removeItems", protect, removeItems);
router
  .route("/:id")
  .put(protect, update_cart_item)
  .delete(protect, remove_cart_item);

module.exports = router;
