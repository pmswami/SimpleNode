const authorize = (req, res, next) => {
  console.log("Authorise");
  const { user } = req.query;
  if (user === "john") {
    console.log("authorised");
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = authorize;
