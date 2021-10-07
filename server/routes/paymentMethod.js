const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  savePaymentMethod,
  getPaymentMethodById,
} = require("../controllers/paymentMethod");

router.route("/").post(protect, savePaymentMethod);
router.route("/:id").get(getPaymentMethodById);

module.exports = router;
