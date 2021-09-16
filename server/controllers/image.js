const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route PUT /avatar
// @desc add or updates user's avatar image
// @access Private
exports.updateAvatar = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const avatarURL = req.avatarURL

  console.log("this happened inside the image controller")

  if (!user) {
    res.status(401);
    throw new Error("Not authorized")
  }
  user.editAvatar(avatarURL)

  res.status(200).json({
    success: {
      user: {
        avatar: avatarURL
      }
    }
  });

});