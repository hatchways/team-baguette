const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route PUT /avatar
// @desc add or updates user's avatar image
// @access Private
exports.updateAvatar = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const imageFile = req.file
  if (!imageFile) {
    // the only reasons the file wouldn't be in req.file is either the file type was wrong, or there was an issue with the actual upload
    res.status(400).send;
    throw new Error("File was not uploaded");
  }

  const avatarURL = imageFile.location

  if (!avatarURL) {
    res.status(400).send;
    throw new Error("There was an issue with the file upload");
  }

  if (!user) {
    res.status(401);
    throw new Error("Not authorized")
  }
  try {

    user.editAvatar(avatarURL)
    res.status(200).json({
      success: {
        user: {
          avatar: avatarURL
        }
      }
    });
  }
  catch {
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});