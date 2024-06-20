const express = require("express");
const { protect, admin } = require("../middleware/auth");
const router = express.Router();

const {
  get_all_products,
  add_product,
  get_prod_by_id,
  update_prod_by_id,
  delete_prod_by_id,
  get_prods_by_category,
  get_categories,
} = require("../controllers/prod_controller");

router.get("/", get_all_products);
router.post("/", protect, add_product);
router.get("/category", protect, get_prods_by_category);
router.get("/categories", get_categories);
router.get("/:id",  get_prod_by_id);
router.put("/:id", protect, admin, update_prod_by_id);
router.delete("/:id", protect, admin, delete_prod_by_id);

module.exports = router;
