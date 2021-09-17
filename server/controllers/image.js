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


exports.uploadGallery = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const newImageFiles = req.files
  if (!newImageFiles || !newImageFiles.length === 0) {
    // the only reasons the file wouldn't be in req.file is either the file type was wrong, or there was an issue with the actual upload
    res.status(400).send;
    throw new Error("Files were not uploaded");
  }

  const galleryURLs = newImageFiles.map(file => file.location)
  
  if (galleryURLs.length === 0) {
    res.status(400).send;
    throw new Error("There was an issue with the file uploads", newImageFiles);
  }

  if (!user) {
    res.status(401);
    throw new Error("Not authorized")
  }
  try {
    // i'm deciding that if they do not give keptLinks, or give it "incorrectly", that an error shouldn't be sent out and only the new images shoudl be saved.
    const keptLinks = Array.isArray(req.body.keptLinks) ? req.body.keptLinks : []
    user.editGallery(keptLinks, galleryURLs)
    res.status(200).json({
      success: {
        user: {
          gallery: user.gallery
        }
      }
    });
  }
  catch {
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});

