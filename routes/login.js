const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const validUser = require("../validation/userValid.js");

router.get("/test", (req, res) => {
    res.json({ message: "login test" });
});


router.post("/signIn", (req, res) => {
    const errors = {};
    user.find({ username: req.body.username }, '-__v -_id -password')
        .then(users => {
            if (users[0].username === req.body.username
                && users[0].email === req.body.email) {
                    console.log(users[0].email + " " + req.body.email)
                res.send("Login Successful");
            } else if (users[0].email != req.body.email) {
                res.status(404).send("EMail is not correct")
            }
        })
        .catch(err => res.status(404).json({ noUsers: "There is no user in the database with this name" }));
});

module.exports = router;