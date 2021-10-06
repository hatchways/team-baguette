const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfileById,
  getProfiles,
  searchProfiles,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/").put(protect, updateProfile);
router.route("/:id").get(getProfileById);
router.route("/").get((req, res, next) => {
  if (req.cookies.token) return protect(req, res, next);
  next();
}, getProfiles);
router.route("/search/:query&:from&:to").get((req, res, next) => {
  if (req.cookies.token) return protect(req, res, next);
  next();
}, searchProfiles);

module.exports = router;
