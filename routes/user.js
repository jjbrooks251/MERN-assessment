const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const validUser = require("../validation/userValid.js");

router.get("/test", (req, res) => {
    res.json({ message: "user test" });
});

router.get('/getUsers', (req, res) => {
    const errors = {};
    user.find({}, '-__v -_id -password')
        .then(users => {
            if (!users) {
                errors.noUsers = "There are no users in the database";
                res.status(404).json(errors);
            }
            res.json(users);
        })
        .catch(err => res.status(404).json({ noUsers: "There are no users" }));
});

router.post('/addUser', (req, res) => {
    const errors = {};

    let valid = validUser(req.body);

    if (valid.isValid) {
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save()
            .then(() => res.send('User added'))
            .catch(() => res.status(404).json(errors));
    } else {
        res.send(valid);
    }
});

module.exports = router;