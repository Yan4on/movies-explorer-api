const Movie = require('../models/movies');

module.exports.getMovies = (req, res, next) => {
  return Movie.find({})
    .populate(['owner'])
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    movieId, nameRU, nameEN, description, year, director,
    country, duration, image, thumbnail, trailer,
  } = req.body;

  return Movie.findOne({ movieId })
    .then((movieIdInMongo) => {
      if (movieIdInMongo) {
        throw new ConflictError();
      }
      return Movie.create({
        movieId,
        nameRU,
        nameEN,
        description,
        year,
        director,
        country,
        duration,
        image,
        thumbnail,
        trailer,
        owner: req.user._id,
      });
    })
    .then((movie) => {
      const { _id } = movie;
      return Movie.findById({ _id })
        .populate('owner');
    })
    .then((movie) => res.status(200).send(movie))
    .catch(next);
}

module.exports.delMovie = (req, res, next) => {
  const { movieId } = req.params;
  return Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(MOVIE_NOT_FOUND);
      }

      if (req.user._id === String(movie.owner)) {
        return Movie.findByIdAndRemove(movieId);
      }
      throw new ForbiddenError(DELETE_FORBIDDEN);
    })
    .then((movie) => {
      if (movie) {
        return res.status(200).send({ message: `${MOVIE_DELETE}: '${movie.nameRU}'` });
      }
      throw new NotFoundError(MOVIE_NOT_FOUND);
    })
    .catch(next);
}