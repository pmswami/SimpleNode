const login = async (req, res) => {
  res.send("Fake login/register/signup route");
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random(0, 100));
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
module.exports = { login, dashboard };
