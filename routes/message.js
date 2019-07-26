const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const message = require("../models/messageModel.js");
const validUser = require("../validation/userValid.js");
const validMess = require("../validation/messageValid.js");
//const passhash = require("../validation/hash.js");

router.get("/test", (req, res) => {
  res.json({
    message: "test"
  });
});

router.get("/getAllMessages", (req, res) => {
  const errors = {};
  message.find({}, '-__v -_id -password')
    .then(messages => {
      if (!messages) {
        errors.noMessages = "There are no Messages";
        res.status(404).json(errors);
      }
      res.json(messages);
    })
    .catch(err => res.status(404).json({ noMessages: "There are no items" }));
});

router.post("/postMessage", (req, res) => {
    const errors = {};
    let valid = validMess(req.body);

    if(valid.isValid) {
        const newMess = new message({
            username: req.body.username,
            password: req.body.password,
            passage: req.body.passage
        });

        newMess.save().then(() => res.send('complete'));

    } else {
        res.send(valid);
    }

});

module.exports = router;