const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

var messageSchema = new Schemea({
    username: {
        type: String,
        required: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    passage: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 750
    }
});

const message = mongoose.model('Message', messageSchema);
module.exports = messageSchema;
module.exports = message;