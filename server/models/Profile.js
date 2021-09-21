const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
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