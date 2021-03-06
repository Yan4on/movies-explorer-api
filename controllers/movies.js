const Movie = require('../models/movie');
const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');
const NotFoundError = require('../errors/not-found-err');
const ConflictError = require('../errors/conflict-err');
const {
  movieIdUsedError,
  movieIdIncorrectError,
  movieNotFoundError,
  noAccessError,
  movieDeletedMessage,
} = require('../utils/messageErr');

const getUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createFilm = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.findOne({ movieId })
    .then((m) => {
      if (m) {
        throw new ConflictError(movieIdUsedError);
      }
      Movie.create({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        owner: req.user._id,
        movieId,
        nameRU,
        nameEN,
      })
        .catch((err) => {
          if (err.name === 'ValidationError') {
            throw new BadRequestError(err.message);
          }
          return next(err);
        })
        .then((movie) => res.status(200).send(movie))
        .catch(next);
    })
    .catch(next);
};

const deleteFilm = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        throw new BadRequestError(movieIdIncorrectError);
      }
      return next(err);
    })
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(movieNotFoundError);
      }

      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError(noAccessError);
      }
      return Movie.findByIdAndRemove(req.params.movieId)
        .then((m) => {
          res.send({ message: `${movieDeletedMessage} '${m.nameRU}'` });
        });
    })
    .catch(next);
};

module.exports = {
  getUserMovies,
  createFilm,
  deleteFilm,
};
