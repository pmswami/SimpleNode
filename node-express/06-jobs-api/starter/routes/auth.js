const express = require("express");
const router = express.Router();

const { login, register, test } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
