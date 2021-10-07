const PaymentMethod = require("../models/PaymentMethod");
const Payment = require("../models/Payment");
const Request = require("../models/Request");
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function getReqs(req, res, next) {
  try {
    if (!req.user?.id) {
      return res.sendStatus(401);
    }
    const dogReqs = await Request.find({
      $or: [
        {
          sitterId: req.user.id,
        },
        { user: req.user.id },
      ],
    })
      .populate("user", "username")
      .sort({ start: "asc" });
    res.status(200).json(dogReqs);
  } catch (error) {
    next(error);
  }
}

async function updateReqs(req, res, next) {
  let updateDoc;
  if (req.body.accepted === "accepted") {
    updateDoc = {
      accepted: true,
      declined: false,
    };
  } else {
    updateDoc = {
      accepted: false,
      declined: true,
    };
  }
  try {
    await Request.findOneAndUpdate(
      { _id: req.body.reqId },
      {
        $set: updateDoc,
      }
    );
    res.status(200).json({ success: "Updated Successfully" });
  } catch (error) {
    next(error);
  }
}

async function createReqs(req, res, next) {
  try {
    const { sitterId, start, end, dogType, specialNotes } = req.body;
    if (!sitterId || !start || !end || !req.body.userId) {
      return res.sendStatus(400);
    }
    await Request.create({
      user: req.body.userId,
      sitterId,
      start,
      end,
      dogType,
      specialNotes,
    });
    res.status(200).json({ message: "Created Successfully" });
  } catch (error) {
    next(error);
  }
}

const createPayment = async (req, res, next) => {
  try {
    const { sitterId } = req.params;
    const { price } = req.body;
    const { id } = req.user;
    const { paymentMethodId } = await PaymentMethod.findOne({ user: id });
    if (!paymentMethodId) {
      res.status(400);
      throw new Error("No payment method saved");
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "cad",
    });
    const confirmCardPayment = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: paymentMethodId,
      }
    );
    if (!confirmCardPayment) {
      res.status(400);
      throw new Error("failed to confirm payment");
    }
    const newPayment = new Payment({
      user: id,
      paymentIntent: {
        id: confirmCardPayment.id,
        amount: confirmCardPayment.amount,
        client_secret: confirmCardPayment.client_secret,
        payment_method: confirmCardPayment.payment_method,
      },
      sitter: sitterId,
    });
    await newPayment.save();
    if (!newPayment) {
      res.status(400);
      throw new Error("failed to create payment");
    }

    res.status(200).json({ success: "paid customer somehow" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getReqs,
  updateReqs,
  createReqs,
  createPayment,
};
