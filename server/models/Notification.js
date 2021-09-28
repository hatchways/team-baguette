const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  read: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
  },
});

module.exports = Notification = mongoose.model(
  "notification",
  notificationSchema
);
