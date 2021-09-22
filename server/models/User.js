const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { deleteFile } = require("../utils/aws")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: ""
  },
  gallery: [String]
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
  this.avatar = url
  await this.save()
}


userSchema.methods.addToGallery = async function (newImages) {
  this.gallery.push(...newImages)
  await this.save()

}

userSchema.methods.deleteFromGallery = async function (links) {
  let tempGallery = new Set(this.gallery)
  let filesToBeDeleted = []

  links.forEach(element => {
    if (tempGallery.delete(element)) {
      filesToBeDeleted.push(element)
    }
  })

  this.gallery = [...tempGallery]

  await this.save()

  if (filesToBeDeleted.length) {
    await cleanUpAWSFolder([...oldLinks])
  }

}

userSchema.methods.deleteAvatar = async function () {
  const deletedImage = this.avatar
  this.avatar = ""
  await this.save()
  await cleanUpAWSFolder(deletedImage)
}

const cleanUpAWSFolder = (keys) => {
  if (Array.isArray(keys)) {
    deleteFile(keys.map(element => element.split(".s3.amazonaws.com/").pop()))
  }
  else {
    deleteFile(keys.split(".s3.amazonaws.com/")[1])

  }
}

module.exports = User = mongoose.model("user", userSchema);
