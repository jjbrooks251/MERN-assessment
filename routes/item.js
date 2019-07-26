const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/userModel.js");
const item = require("../models/itemModel.js");
const validUser = require("../validation/userValid.js");
const validItem = require("../validation/itemValid.js");
//const passhash = require("../validation/hash.js");

router.get("/test", (req, res) => {
  res.json({
    message: "test"
  });
});

router.get("/getAllItems", (req, res) => {
  const errors = {};
  item.find({}, '-__v -_id -password')
    .then(items => {
      if (!items) {
        errors.noitems = "There are no Items";
        res.status(404).json(errors);
      }
      res.json(items);
    })
    .catch(err => res.status(404).json({ noitems: "There are no Items" }));
});

router.post("/postItem", (req, res) => {
  const errors = {};
  let valid = validItem(req.body);

  if (valid.isValid) {
    user.find({ username: req.body.username }, '-__v -_id -password')
      .then(users => {
        if (!users) {
          errors.noUsers = "There are no Users with this name";
          res.status(404).json(errors);
        } else if (users[0].username === req.body.username) {
          const newItem = new item({
            username: req.body.username,
            password: req.body.password,
            passage: req.body.passage
          });

          newItem.save().then(() => res.send('complete'))
          res.json(items);
        }
      })
      .catch(err => res.status(404).json({ noUsers: "There are no Users with this username" }));

  } else {
    res.send(valid);
  }
});

module.exports = router;