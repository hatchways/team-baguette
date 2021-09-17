const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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


userSchema.methods.editGallery = async function (keptImages,newImages){

  
}

module.exports = User = mongoose.model("user", userSchema);
