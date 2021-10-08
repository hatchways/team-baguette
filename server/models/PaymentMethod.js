const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentMethodSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  fullName: {
    type: String,
    required: true,
  },
  last4: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
  paymentMethodId: {
    type: String,
    required: true,
  },
});
module.exports = PaymentMethod = mongoose.model(
  "PaymentMethod",
  paymentMethodSchema
);
