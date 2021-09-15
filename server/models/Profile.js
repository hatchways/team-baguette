const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const availabilitySchema = new Schema({
  availability: {
    date: {
      type: Date,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
  },
});

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  availability: [availabilitySchema],
  availableDays: [
    {
      type: String,
    },
  ],
  availablePeriod: {
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
