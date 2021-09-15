const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route PUT /avatar
// @desc add or updates user's avatar image
// @access Private
exports.updateAvatar = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const avatarURL = await req.file

  if (!user){
      res.status(401);
      throw new Error("Not authorized")
  }
  else if (user.editAvatar(avatarURL)){

    res.status(200).json({
        success: {
          user: {
            avatar: avatarURL.location
          }
        }
      });
  }
});