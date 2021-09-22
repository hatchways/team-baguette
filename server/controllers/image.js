const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const userSerializer = require("../serializers/userSerializer")

// @route PUT /avatar
// @desc add or updates user's avatar image
// @access Private
exports.updateAvatar = asyncHandler(async (req, res, next) => {
  const user = req.user;
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
  try {
    user.editAvatar(avatarURL)
    res.status(200).json({
      success: {
        user: userSerializer(user)
      }
    });
  }
  catch (err) {
    console.log(err)
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});

exports.deleteAvatar = asyncHandler(async (req, res, next) => {
  const user = req.user
  await user.deleteAvatar()

  try {

    await user.deleteAvatar()
    res.status(200).send("You have successfully deleted your avatar")
  }
  catch {
    res.status(400).send;
    throw new Error("Avatar couldn't be deleted");
  }
  ;
})


exports.uploadGallery = asyncHandler(async (req, res, next) => {
  const user = req.user
  const newImageFiles = req.files
  if (!newImageFiles || !newImageFiles.length) {
    // the only reasons the file wouldn't be in req.file is either the file type was wrong, or there was an issue with the actual upload
    res.status(400).send;
    throw new Error("No files found");
  }

  const galleryURLs = newImageFiles.map(file => file.location)

  if (!galleryURLs.length) {
    res.status(400).send;
    throw new Error("There was an issue with the file uploads", newImageFiles);
  }

  try {
    // i'm deciding that if they do not give keptLinks, or give it "incorrectly", that an error shouldn't be sent out and only the new images shoudl be saved.
    user.addToGallery(galleryURLs)
    res.status(200).json({
      success: {
        user: userSerializer(user)
      }
    });
  }
  catch {
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});

