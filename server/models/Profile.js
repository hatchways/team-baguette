const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { deleteFile } = require("../utils/aws");

const profileSchema = new Schema({
  user: {
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
      type: Number,
    },
    end: {
      type: Number,
    },
  },
  notification: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
  sitter: {
    type: Boolean,
    default: false,
  },
  gallery: [String],
});

profileSchema.statics.findByUserIdPopulated = async function (userId) {
  return await this.findOne({ user: userId }).populate(
    "user",
    "_id username avatar"
  );
};

profileSchema.methods.addToGallery = async function (newImages) {
  this.gallery.push(...newImages);
  await this.save();
};

profileSchema.methods.deleteFromGallery = async function (links) {
  let tempGallery = new Set(this.gallery);
  let filesToBeDeleted = [];

  links.forEach((element) => {
    if (tempGallery.delete(element)) {
      filesToBeDeleted.push(element);
    }
  });

  this.gallery = [...tempGallery];

  await this.save();

  if (filesToBeDeleted.length) {
    await cleanUpAWSFolder([...filesToBeDeleted]);
  }
};

const cleanUpAWSFolder = (keys) => {
  deleteFile(keys.map((element) => element.split(".s3.amazonaws.com/").pop()));
};

module.exports = Profile = mongoose.model("Profile", profileSchema);
