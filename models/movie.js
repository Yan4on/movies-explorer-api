const mongoose = require('mongoose');
const validator = require('validator');
const {
  urlStringErrorError,
  // rusNameMovieError,
  // engNameMovieError,
} = require('../utils/messageErr');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: urlStringErrorError,
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: urlStringErrorError,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: urlStringErrorError,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    // validate: {
    // validator(v) {
    //   return /^[?!,.\-а-яА-ЯёЁ0-9\s]+$/.test(v);
    // },
    // message: 'Поле "Название фильма на русском языке" обязательно',
    // },
  },
  nameEN: {
    type: String,
    required: true,
    // validate: {
    //   validator() {
    //     return /^[?!,.\-a-zA-Z0-9\s]+$/.test(v);
    //   },
    //   message: 'Поле "Название фильма на английском языке" обязательно',
    // },
  },
});

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel;
