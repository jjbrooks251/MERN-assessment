const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const item = require("../models/userModel.js");
const validateLoginInput = require("../validation/userValid.js");
//const passhash = require("../validation/hash.js");

router.get("/test", (req, res) => {
  res.json({
    message: "test"
  });
});

module.exports = router;