const User = require("../models/User");
const jwt = require("jsonwebtoken");

const jwtVerifyUser = async (token, next) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const foundUser = await User.findById(payload.id);
    return await foundUser;
  } catch (err) {
    next(err);
  }
};

module.exports = { jwtVerifyUser };
