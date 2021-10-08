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

router.route("/").get((req, res, next) => {
  if (req.cookies.token) return protect(req, res, next);
  next();
}, getProfiles);


module.exports = router;
