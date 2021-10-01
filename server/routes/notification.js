const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  updateNotification,
  getUnreadNotifications,
  getNotifications,
} = require("../controllers/notification");

router.route("/").post(protect, createNotification);
router.route("/:id").put(protect, updateNotification);
router.route("/").get(protect, getNotifications);
router.route("/unread").get(protect, getUnreadNotifications);

module.exports = router;
