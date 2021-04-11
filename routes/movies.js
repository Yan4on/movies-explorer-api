const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUserMovies,
  createFilm,
  deleteFilm,
} = require('../controllers/movies');
const {
  urlStringError,
  // rusNameMovieError,
  // engNameMovieError,
} = require('../utils/messageErr');

router.get('/', getUserMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi
      .string()
      .required(),
    director: Joi
      .string()
      .required(),
    duration: Joi
      .number()
      .required(),
    year: Joi
      .string()
      .required(),
    description: Joi
      .string()
      .required(),
    image: Joi
      .string()
      .required()
      // eslint-disable-next-line no-useless-escape
      .pattern(/^https?:\/\/(www\.)?[a-z0-9\-\.]+\.[a-z]{2,9}(:[0-9]{1,5})?\/?[a-z0-9\-\/\._~:\?#\[\]@!\$\&'\(\)\*\+\,\;\=\%]{0,}$/i)
      .message(urlStringError),
    trailer: Joi
      .string()
      .required()
      // eslint-disable-next-line no-useless-escape
      .pattern(/^https?:\/\/(www\.)?[a-z0-9\-\.]+\.[a-z]{2,9}(:[0-9]{1,5})?\/?[a-z0-9\-\/\._~:\?#\[\]@!\$\&'\(\)\*\+\,\;\=\%]{0,}$/i)
      .message(urlStringError),

    thumbnail: Joi
      .string()
      .required()
      // eslint-disable-next-line no-useless-escape
      .pattern(/^https?:\/\/(www\.)?[a-z0-9\-\.]+\.[a-z]{2,9}(:[0-9]{1,5})?\/?[a-z0-9\-\/\._~:\?#\[\]@!\$\&'\(\)\*\+\,\;\=\%]{0,}$/i)
      .message(urlStringError),
    movieId: Joi
      .number()
      .required(),
    nameRU: Joi
      .string()
      .required(),
    // .pattern(/^[\D]+$/)
    // .message(rusNameMovieError),
    nameEN: Joi
      .string()
      .required(),
    // .pattern(/^[\D]+$/)
    // .message(engNameMovieError),
  }),
}), createFilm);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi
      .string()
      .required()
      .hex()
      .length(24),
  }),
}), deleteFilm);

module.exports = router;
