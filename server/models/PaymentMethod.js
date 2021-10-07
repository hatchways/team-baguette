const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentMethodSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  fullName: {
    type: String,
  },
  last4: {
    type: String,
  },
  type: {
    type: String,
  },
  exp: {
    type: String,
  },
  paymentMethodId: {
    type: String,
  },
});
module.exports = PaymentMethod = mongoose.model(
  "PaymentMethod",
  paymentMethodSchema
);
