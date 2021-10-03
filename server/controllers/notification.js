const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");
const Profile = require("../models/Profile");

// @route POST /notification
// @desc Create notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, receiverId, start, end } = req.body;
  const notification = new Notification();
  const receiver = await notification.createNotification(
    type,
    req.user.id,
    receiverId,
    start,
    end
  );
  if (!receiver) {
    res.status(400);
    throw new Error("Failed to push notification");
  }
  res.status(200);
});

// @route PUT /notification
// @desc Update notification status
// @access Private
exports.updateNotification = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const profile = await Profile.findOne({ user: id });
  const notification = await Notification.updateMany(
    { _id: { $in: profile.notification } },
    { $set: { read: true } }
  );
  if (notification.nModified === 0) {
    res.status(400);
    throw new Error("Notification could not be updated");
  }
  res.status(200).json({
    success: notification,
  });
});

// @route GET /notification
// @desc Get all notifications
// @access Private
exports.getNotifications = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const profile = await Profile.findOne({ user }).populate({
    path: "notification",
    populate: { path: "sender", model: "User", select: "avatar" },
  });
  if (!profile) {
    res.status(404);
    throw new Error("Could not retrieve the profile");
  }
  res.status(200).json({
    success: profile.notification,
  });
});

// @route GET /notification/unread
// @desc Get all unread notifications
// @access Private
exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const profile = await Profile.findOne({ user }).populate({
    path: "notification",
    populate: { path: "sender", model: "User", select: "avatar" },
  });
  if (!profile) {
    res.status(404);
    throw new Error("Could not retrieve the profile");
  }
  const unreadNotifications = profile.notification.filter((noti) => !noti.read);
  res.status(200).json({
    success: unreadNotifications,
  });
});
