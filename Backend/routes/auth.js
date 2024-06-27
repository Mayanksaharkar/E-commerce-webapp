const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/auth");
const {
  get_all_users,
  get_user_by_id,
  delete_user_by_id,
  create_user,
  update_user_by_id,
  user_login,
} = require("../controllers/auth_controller");

router.get("/allUsers", protect, admin, get_all_users);
router.get("/:id", protect, get_user_by_id);
router.delete("/:id", protect, admin, delete_user_by_id);

router.post("/register", create_user);
router.post("/login", user_login);
router.get("/profile/:id", protect, get_user_by_id);
router.put("/profile/:id", protect, update_user_by_id);

module.exports = router;
