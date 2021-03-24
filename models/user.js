const mongoose = require('mongoose');
const validator = require('validator');
const { invalidEmailError, passwordSpaceError } = require('../utils/messageErr');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: invalidEmailError,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator(v) {
        return /^\S*$/.test(v);
      },
      message: passwordSpaceError,
    },
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
