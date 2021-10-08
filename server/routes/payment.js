const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  savePaymentMethod,
  getPaymentMethodById,
  paymentIntent,
} = require("../controllers/payment");

router.route("/method").post(protect, savePaymentMethod);
router.route("/method/:id").get(getPaymentMethodById);

module.exports = router;
