const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfileById,
  getProfiles,
  getProfilesForSitter,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/").put(protect, updateProfile);
router.route("/sitter").get(protect, getProfilesForSitter);
router.route("/:id").get(getProfileById);
router.route("/").get(getProfiles);

module.exports = router;
