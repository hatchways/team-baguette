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
    },
    amount: {
      type: Number,
    },
    client_secret: {
      type: String,
    },
    payment_method: {
      type: String,
    },
  },
  sitter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = Payment = mongoose.model("Payment", paymentSchema);
