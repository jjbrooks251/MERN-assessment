const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

const users = require("./routes/user.js");
const login = require("./routes/login.js");
const message = require("./routes/message.js");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/login", login);
app.use("/message", message);

mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true}).then(() => {
    console.log("Connection to host was successful")}, 
    err => {console.log('This is not the database you are looking for')}
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`This server is running on port ${port}`));