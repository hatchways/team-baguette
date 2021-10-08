const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  paymentIntent: {
    id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    client_secret: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
  },
  sitter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = Payment = mongoose.model("Payment", paymentSchema);
