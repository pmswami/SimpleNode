// const CustomAPIError = require("../errors/custom-error");
const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  //   console.log(req.headers);
  //   console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // console.log(authHeader);
    throw new UnauthenticatedError("No token provided");
  }
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    // const luckyNumber = Math.floor(Math.random() * 100);
    // console.log(luckyNumber);
    const { username, id } = decoded;
    req.user = { username, id };
    next();
    // res.status(200).json({
    //   msg: `Hello, ${username}`,
    //   secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    // });
  } catch (error) {
    throw new UnauthenticatedError("No token provided");
  }
};

module.exports = authenticationMiddleware;
