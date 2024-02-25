const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  //   console.log(username, password);
  if (!username || !password) {
    throw new CustomAPIError("Please provide username/password", 400);
  }

  //create dummy ID, generally unique ID comes from DB
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //   res.send("Fake login/register/signup route");
  res.status(200).json({ msg: "User Created", token: token });
};

const dashboard = (req, res) => {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // console.log(authHeader);
    throw new CustomAPIError("No token provided", 401);
  }
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    // console.log(luckyNumber);
    const { username } = decoded;
    res.status(200).json({
      msg: `Hello, ${username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401);
  }
};

module.exports = { login, dashboard };
