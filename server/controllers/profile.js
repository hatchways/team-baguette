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
    phone,
    address,
    description,
  } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const profile = await Profile.findOne({ userId: user._id });
  if (profile) {
    res.status(400);
    throw new Error("Profile already exists");
  }
  const newProfile = new Profile({
    userId: user._id,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthDate: birthDate,
    phone: phone,
    address: address,
    description: description,
  });
  await newProfile.save();
  if (!newProfile) {
    res.status(400);
    throw new Error("bad request");
  }
  res.status(201).json({
    success: newProfile,
  });
});

// @route PUT /profiles/edit
// @desc Update profile by user id
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    phone,
    address,
    description,
  } = req.body;
  const id = req.user.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const profile = await Profile.findOneAndUpdate(
    { userId: id },
    {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthDate: birthDate,
      phone: phone,
      address: address,
      description: description,
    },
    { new: true }
  );
  await user.updateOne({}, { email: email });
  if (!profile) {
    res.status(404);
    throw new Error("No profile");
  }
  res.status(200).json({
    success: profile,
  });
});

// @route GET /profiles/:id
// @desc Get profile by id
// @access Public
exports.getProfileById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findOne({ userId: id });
  if (!profile) {
    res.status(404);
    throw new Error("No profile");
  }
  const user = await User.findOne({ _id: id });
  if (!user) {
    res.status(404);
    throw new Error("No User");
  }
  const convertedJSON = profile.toJSON();
  convertedJSON.email = user.email;
  res.status(200).json({
    success: convertedJSON,
  });
});

// @route GET /profiles
// @desc Get all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();
  if (!profiles) {
    res.status(404);
    throw new Error("No profiles");
  }
  res.status(200).json({
    success: profiles,
  });
});
