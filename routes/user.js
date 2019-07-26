const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");

router.get("/test", (req, res) => {
    res.json({message: "test"});
});

module.exports = router;