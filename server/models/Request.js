const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sitterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    declined: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    dogType: {
      type: String,
      maxLength: 30,
    },
    specialNotes: {
      type: String,
      maxLength: 255,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Request = mongoose.model("Request", requestSchema);
