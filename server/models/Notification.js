const mongoose = require("mongoose");
const Profile = require("./Profile");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.methods.createNotification = async function (
  type,
  userId,
  receiverId,
  start,
  end
) {
  const senderProfile = await Profile.findOne({ user: userId }).populate(
    "sender",
    "avatar"
  );
  const formattedName =
    senderProfile.firstName.charAt(0).toUpperCase() +
    senderProfile.firstName.slice(1);
  const startDate = new Date(`${start}`);
  const endDate = new Date(`${end}`);
  const hours = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;
  let description;
  let title;

  if (type === "request") {
    description = `${formattedName} has requested your service for ${hours} hours`;
    title = "Dog Sitting";
  } else if (type === "message") {
    description = `${formattedName} has sent you a message`;
    title = "Message";
  }

  this.type = type;
  this.title = title;
  this.description = description;
  this.sender = senderProfile.user;
  await this.save();

  const receiver = await Profile.findOneAndUpdate(
    { user: receiverId },
    { $push: { notification: this._id } },
    { new: true }
  );
  return receiver;
};

module.exports = Notification = mongoose.model(
  "Notification",
  notificationSchema
);
