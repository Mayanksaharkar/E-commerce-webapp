const express = require("express");
const { protect, admin } = require("../middleware/auth");
const router = express.Router();

const {
  get_all_products,
  add_product,
  get_prod_by_id,
  update_prod_by_id,
  delete_prod_by_id,
} = require("../controllers/prod_controller");

router.get("/", get_all_products);
router.post("/", protect, admin, add_product);
router.get("/:id", protect, get_prod_by_id);
router.put("/:id", protect, admin, update_prod_by_id);
router.delete("/:id", protect, admin, delete_prod_by_id);

module.exports = router;
