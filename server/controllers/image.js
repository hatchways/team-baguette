const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const {userSerializer} = require("../serializers/userSerializer")
const profileSerializer = require("../serializers/profileSerializer")


// @route PUT /avatar
// @desc add or updates user's avatar image
// @access Private
exports.updateAvatar = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const imageFile = req.file;
  if (!imageFile) {
    // the only reasons the file wouldn't be in req.file is either the file type was wrong, or there was an issue with the actual upload
    res.status(400).send;
    throw new Error("File was not uploaded");
  }

  const avatarURL = imageFile.location;

  if (!avatarURL) {
    res.status(400).send;
    throw new Error("There was an issue with the file upload");
  }
  try {
    user.editAvatar(avatarURL);
    res.status(200).json({
      success: {
        user: userSerializer(user),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});

exports.deleteAvatar = asyncHandler(async (req, res, next) => {
  const user = req.user;

  try {
    await user.deleteAvatar();
    res.status(200).send("You have successfully deleted your avatar");
  } catch {
    res.status(400).send;
    throw new Error("Avatar couldn't be deleted");
  }
});

exports.uploadGallery = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const profile = req.profile;
  const newImageFiles = req.files;
  if (!newImageFiles || !newImageFiles.length) {
    // the only reasons the file wouldn't be in req.file is either the file type was wrong, or there was an issue with the actual upload
    res.status(400).send;
    throw new Error("No files found");
  }

  const galleryURLs = newImageFiles.map((file) => file.location);

  if (!galleryURLs.length) {
    res.status(400).send;
    throw new Error("There was an issue with the file uploads", newImageFiles);
  }

  try {
    profile.addToGallery(galleryURLs);
    res.status(200).json({
      success: {
        user: profileSerializer(profile),
      },
    });
  } catch {
    res.status(400).send;
    throw new Error("Avatar couldn't update");
  }
});

exports.deleteGallery = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const profile = await Profile.findByUserIdPopulated(user);
  const deleteLinks = req.body.deleteLinks;

  if (!profile) {
    res.status(404);
    throw new Error("No profile found");
  }

  try {
    await profile.deleteFromGallery(deleteLinks);
    res.status(200).json({
      success: {
        user: profileSerializer(profile),
      },
    });
  } catch {
    res.status(400).send;
    throw new Error("Images could not be deleted from the gallery");
  }
});
