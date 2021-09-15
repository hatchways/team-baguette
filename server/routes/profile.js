const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfileById,
  getProfiles,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/edit").put(protect, updateProfile);
router.route("/:id").get(getProfileById);
router.route("/").get(getProfiles);

module.exports = router;
