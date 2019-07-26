const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

var userSchema = new Schemea({
    username: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

const user = mongoose.model('User', userSchema);
module.exports = userSchema;
module.exports = user;