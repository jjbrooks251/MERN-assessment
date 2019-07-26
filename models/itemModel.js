const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

var itemSchema = new Schemea({
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

const item = mongoose.model('Message', itemSchema);
module.exports = itemSchema;
module.exports = item;