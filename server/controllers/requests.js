const Request = require("../models/Request");

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
      .populate("User", "username")
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
    res.status(200).json({ message: "Updated Successfully" });
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

module.exports = {
  getReqs,
  updateReqs,
  createReqs,
};
