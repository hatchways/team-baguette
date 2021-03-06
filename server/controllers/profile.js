const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const profileSerializer = require("../serializers/profileSerializer")

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
  const user = req.user;
  const profile = await Profile.findOne({ user: user._id });
  if (profile) {
    res.status(400);
    throw new Error("Profile already exists");
  }
  const newProfile = new Profile({
    user: user._id,
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
  const user = req.user;
  const profile = await Profile.findOneAndUpdate(
    { user: user._id },
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

// @route GET /profiles/user/:id
// @desc Get profile by user id
// @access Public
exports.getProfileByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findByUserIdPopulated(id);
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


// @route GET /profiles/:id
// @desc Get profile by id
// @access Public
exports.getProfileById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findAndPopulateUser(id)
  if (!profile) {
    res.status(404);
    throw new Error("No profile");
  }

  res.status(200).json({
    success: profileSerializer(profile),
  });
});

// @route GET /profiles
// @desc Get all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  if (!req.query) {
    let profiles;
    if (req.user) {
      profiles = await Profile.find({
        $and: [{ user: { $ne: req.user.id } }, { sitter: true }],
      }).populate("user", "avatar");
    } else {
      profiles = await Profile.find({ sitter: true }).populate(
        "user",
        "avatar"
      );
    }
    if (!profiles) {
      res.status(404);
      throw new Error("No profiles");
    }
    res.status(200).json({
      success: profiles,
    });
  } else {
    const { query, from, to } = req.query;
    const startDate = new Date(from);
    const endDate = new Date(to);
    const startDay = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(startDate);
    const endDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      endDate
    );

    let profiles;
    if (req.user) {
      profiles = await Profile.find({
        $and: [
          { user: { $ne: req.user.id } },
          { sitter: true },
          { address: { $regex: "^" + query, $options: "i" } },
          { availableDays: { $all: [startDay, endDay] } },
        ],
      }).populate("user", "avatar");
    } else {
      profiles = await Profile.find({
        $and: [
          { sitter: true },
          { address: { $regex: "^" + query, $options: "i" } },
          { availableDays: { $all: [startDay, endDay] } },
        ],
      }).populate("user", "avatar");
    }
    if (!profiles) {
      res.status(404);
      throw new Error("No profiles");
    }
    res.status(200).json({
      success: profiles,
    });
  }
});
