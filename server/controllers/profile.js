const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route POST /profiles
// @desc Create profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    address,
    description,
  } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const profile = new Profile({
    userId: user._id,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthDate: birthDate,
    email: email,
    address: address,
    description: description,
  });
  await profile.save();
  if (!profile) {
    res.status(400);
    throw new Error("bad request");
  }
  res.status(201).json({
    success: {
      profile: profile,
    },
  });
});

// @route PUT /profiles/edit
// @desc Update profile by user id
// @access Private
exports.updateProfileById = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    address,
    description,
  } = req.body;
  const id = req.user.id;
  const profile = await Profile.findOneAndUpdate(
    { userId: id },
    {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthDate: birthDate,
      email: email,
      address: address,
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
