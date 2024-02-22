const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // console.log("user hit post method");
  console.log(req.body);
  if (req.body?.name) return res.status(200).send(`Hi ${req.body.name}`);
  else return res.status(401).send(`Please provide credential`);
});

module.exports = router;
