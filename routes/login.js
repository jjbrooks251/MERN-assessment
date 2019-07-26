const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const validUser = require("../validation/userValid.js");

router.get("/test", (req, res) => {
    res.json({ message: "login test" });
});

module.exports = router;