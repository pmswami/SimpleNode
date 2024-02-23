const notFound = (req, res) => {
  res.send("Route does not exists").status(404);
};
module.exports = notFound;
