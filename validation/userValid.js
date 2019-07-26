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

    if (!Validator.isEmail(data.email)) {
        errors.email = "Please enter a valid email"
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "The email field is required"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "A password is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};