const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // console.log(req.body);
  // res.send("Register user");
  // const { name, email, password } = req.body;
  // if (!name || !password || !email) {
  //   throw new BadRequestError("Please provide name, email and password");
  // }
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("Login user");
};

module.exports = {
  login,
  register,
};
