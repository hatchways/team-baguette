const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { deleteFile } = require("../utils/aws");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
    default: ""
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.editAvatar = async function (url) {
  this.avatar = url;
  await this.save();
};

userSchema.methods.deleteAvatar = async function () {
  const deletedImage = this.avatar;
  this.avatar = "";
  await this.save();
  await cleanUpAWSFolder(deletedImage);
};

const cleanUpAWSFolder = (keys) => {
  deleteFile(keys.split(".s3.amazonaws.com/")[1])
}

module.exports = User = mongoose.model("User", userSchema);
