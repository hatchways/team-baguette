const PaymentMethod = require("../models/PaymentMethod");
const asyncHandler = require("express-async-handler");

// @route POST /payment/method
// @desc Save payment method
// @access Private
exports.savePaymentMethod = asyncHandler(async (req, res, next) => {
  const { paymentMethod } = req.body;
  const { id } = req.user;
  const payment = await PaymentMethod.findOne({ user: id });
  if (payment) {
    res.status(400);
    throw new Error("Payment method already exists");
  }
  const newPaymentMethod = new PaymentMethod({
    user: id,
    last4: paymentMethod.last4,
    fullName: paymentMethod.fullName,
    type: paymentMethod.type,
    exp: paymentMethod.exp,
    paymentMethodId: paymentMethod.paymentMethodId,
  });
  await newPaymentMethod.save();
  if (!newPaymentMethod) {
    res.status(400);
    throw new Error("bad request");
  }
  res.status(201).json({
    success: newPaymentMethod,
  });
});

// @route GET /payment/method/:id
// @desc get payment method by id
// @access Public
exports.getPaymentMethodById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const paymentMethod = await PaymentMethod.findOne({ user: id });
  if (!paymentMethod) {
    res.status(404);
    throw new Error("No payment method");
  }
  res.status(200).json({
    success: paymentMethod,
  });
});
