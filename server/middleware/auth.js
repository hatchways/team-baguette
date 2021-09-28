const User = require("../models/User");

const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id)

    if (user) {

      req.user = user;
      next();
    }
    else {
    throw new Error("Not authorized");
    }


  } catch (err) {
    res.status(401).send("Token is not valid");
  }
};

module.exports = protect;
