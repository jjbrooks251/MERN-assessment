const Validator = require("validator");
const isEmpty = require("./isEmpty.js")

module.exports = function validUserCreate(data) {
    let errors = {};

    if (!Validator.isAlphanumeric(data.username)) {
        errors.username = "Your Username needs to consist of letters and numbers only"
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "The username field is required"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "A password is required"
    }

    if (Validator.isEmpty(data.passage)) {
        errors.message = "A message is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};