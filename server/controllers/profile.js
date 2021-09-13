const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route POST /profiles
// @desc Create profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, description } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const profile = new Profile({
    user: user._id,
    firstName: firstName,
    lastName: lastName,
    description: description,
  });
  await profile.save();
});

// @route PUT /profiles/:id
// @desc Update profile by id
// @access Private
exports.updateProfileById = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, description } = req.body;
  const id = req.params.id;
  const profile = await Profile.findOneAndUpdate(
    { _id: id },
    {
      firstName: firstName,
      lastName: lastName,
      description: description,
    }
  );
  if (!profile) {
    res.status(404);
    throw new Error("No profile");
  }
  res.status(200).json({
    success: {
      profile: profile,
    },
  });
});

// @route GET /profiles/:id
// @desc Get profile by id
// @access Public
exports.getProfileById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findOne({ id });
  if (!profile) {
    res.status(404);
    throw new Error("No profile");
  }
  res.status(200).json({
    success: {
      profile: profile,
    },
  });
});

// @route GET /profiles
// @desc Get all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.findAll();
  if (!profiles) {
    res.status(404);
    throw new Error("No profiles");
  }
  res.status(200).json({
    success: {
      profiles: profiles,
    },
  });
});
