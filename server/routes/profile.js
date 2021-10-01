const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfileByUserId,
  getProfileById,
  getProfiles,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/").put(protect, updateProfile);
router.route("/user/:id").get(getProfileByUserId);
router.route("/:id").get(getProfileById);

router.route("/").get(getProfiles);

module.exports = router;
