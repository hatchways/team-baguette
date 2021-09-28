const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");
const Profile = require("../models/Profile");

const calculateTime = (start, end) => {
  const day1 = new Date(`${start}`);
  const day2 = new Date(`${end}`);
  return (day2.getTime() - day1.getTime()) / 1000 / 60 / 60;
};
const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// @route POST /notification
// @desc Create notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, title, sitterId, start, end } = req.body;
  const userProfile = await Profile.findOne({ user: req.user.id }).populate(
    "user",
    "avatar"
  );
  let description;
  if (type === "request") {
    description = `${capitalizeFirst(
      userProfile.firstName
    )} has requested your service for ${calculateTime(start, end)} hours`;
  } else if (type === "message") {
    description = `${capitalizeFirst(
      userProfile.firstName
    )} has sent you a message`;
  }
  const notification = new Notification({
    type,
    title,
    date: start,
    description,
    avatar: userProfile.user.avatar,
  });
  await notification.save();
  const sitter = await Profile.findOneAndUpdate(
    { user: sitterId },
    { $push: { notification: notification._id } },
    { new: true }
  );
  if (!sitter) {
    res.status(400);
    throw new Error("Failed to push notification");
  }
  res.status(200);
});

// @route PUT /notification
// @desc Update notification status
// @access Private
exports.updateNotification = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const notification = await Notification.findOneAndUpdate(
    { _id: id },
    { read: true },
    { new: true }
  );
  if (!notification) {
    res.status(404);
    throw new Error("Notification does not exist");
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
  const profile = await Profile.findOne({ user }).populate("notification");
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
  const profile = await Profile.findOne({ user }).populate("notification");
  if (!profile) {
    res.status(404);
    throw new Error("Could not retrieve the profile");
  }
  const unreadNotifications = profile.notification.filter((noti) => !noti.read);
  res.status(200).json({
    success: unreadNotifications,
  });
});
