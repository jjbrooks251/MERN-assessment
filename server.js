const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true}).then(() => {
    console.log("Connection to host was successful")}, 
    err => {console.log('This is not the database you are looking for')}
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`This server is running on port ${port}`));