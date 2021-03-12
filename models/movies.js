const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String
  },
  director: {
    type: String
  },
  duration: {
    type: Number
  },
  year: {
    type: String
  },
  description: {
    type: String
  },
  image : {
    type: String //записать урлом
  },
  trailer: {
    type: String //записать урлом
  },
  thumbnail : {
    type: String //записать урлом
  },
  owner: {
    type: String
  },
  movieId: {
    type: String
  },
  nameRU : {
    type: String
  },
  nameEN : {
    type: String
  },
});


module.exports = mongoose.model('movie', movieSchema);