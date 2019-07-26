const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const validUser = require("../validation/userValid.js");
//const passHash = require("../validation/hash.js");

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
    if (req.body.password === req.body.passconf) {
        if (valid.isValid) {
            const newUser = new user({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
                //password: passHash(req.body.password)
            });
            bcrypt.hash(req.body.password, 15)
                .then((hash) => {
                    newUser.password = hash
                    newUser.save()
                    res.status(200).send("Added New Item")
                })
                .catch(err => res.status(555).json({ "Fault": `${err}` }))
        } else {
            res.send(valid);
        }
    } else {
        res.json({ Message: "Passwords do not match" });
    }
});

// router.post('/addUniqueUser', (req, res) => {
//     const errors = {};

//     user.find({ username: req.body.username }, '-__v -_id -password')
//         .then(users => {
//             if (users[0].username === req.body.username) {
//                 res.status(404).send("Username is not unique")
//             } 
//         }).then( users => {
//           user.find({ email: req.body.email }, '-__v -_id -password')
//                     .then(users => {
//                         if (users[0].email === req.body.email) {
//                             res.status(404).send("Email is already registered with an account")
//                         } else {
//                             res.status(404).json({ noUsers: "There is no user in the database with this name" });
//                         }
//                     }) 
//         })
//         .catch(err => res.status(404).json({ noUsers: "There is no user in the database with this name" }));
// });

    router.delete('/remUser', (req, res) => {
        var search = { username: req.body.username };
        user.findOneAndDelete(search)
            .then(users => {
                if (!users) {
                    errors.noUsers = "There are no users";
                    res.status(404).json(errors);
                }
                res.send('User removed');
            })
            .catch(err => res.status(404).json({ noUsers: "There are no users to delete with this username" }));
    });

    module.exports = router;