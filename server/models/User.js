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

// instance method to takes a file and uploads it online and stores a new avatar link to document
userSchema.methods.editAvatar = async function (url) {
  this.avatar = url
  await this.save()
}


userSchema.methods.editGallery = async function (keptImages, newImages) {

  let oldLinks = new Set(this.gallery)
  let tempGallery = []

  // i am cycling through keptImages which is an array of links given to me and seeing if the old gallery links have them and pushing them into a tempGallery.
  // the reason i'm doing this is to help santize what the new links that are being stored in the gallery. This way, if the api request is includes different URLs or URLS that don't exist,
  // they will just be ignored.
  keptImages.forEach(element => {
    if (oldLinks.delete(element)) {
      tempGallery.push(element)
    }
  })

  this.gallery = [...tempGallery, ...newImages]
  await this.save()
  // this is to check that the old gallery was not empty and there were things that need to be deleted
  if (oldLinks.size > 0 && tempGallery.length > 0) {
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
  // currently, the links begin as https://xxxxxxx.s3.amazonaws.com/{thekeyforthefilehere}. so I am splitting it so it is easier to delete
  if (Array.isArray(keys)) {
    deleteFile(keys.map(element => element.split(".s3.amazonaws.com/")[1]))
  }
  else {
    deleteFile(keys.split(".s3.amazonaws.com/")[1])

  }
}

module.exports = User = mongoose.model("user", userSchema);
