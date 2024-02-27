const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  // console.log(req.body);
  // res.send("Register user");
  // const { name, email, password } = req.body;
  // if (!name || !password || !email) {
  //   throw new BadRequestError("Please provide name, email and password");
  // }

  const { name, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };
  const tempUser = { name, email, password };
  //create user with password encrypted
  const user = await User.create({ ...tempUser });
  //generate token
  const token = user.createJWT();
  // const token = jwt.sign(
  //   { userId: user._id, name: user.name },
  //   process.env.JWT_SECRET,
  //   {
  //     expiresIn: "30d",
  //   }
  // );
  res
    .status(StatusCodes.CREATED)
    // .json({ user: { name: user.name }, token });
    .json({ user: { name: user.getName() }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  // compare passwords
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.getName() }, token });
  // res.send("Login user");
};

module.exports = {
  login,
  register,
};
