const needAuthError = 'Необходима авторизация';
const serverError = 'На сервере произошла ошибка';
const requestLimitExceedError = 'Превышено число запросов';
const notFoundError = 'Запрашиваемый ресурс не найден';

const movieIdUsedError = 'Указанный movieId уже занят';
const movieIdIncorrectError = 'Некорректно указан id фильма';
const movieNotFoundError = 'Не удалось найти фильм';
const noAccessError = 'Нет доступа';
const movieDeletedMessage = 'Успешно удален фильм';

const userIdIncorrectError = 'Некорректно указан id пользователя';
const userNotFoundError = 'Не удалось найти пользователя';
const emailUsedError = 'Указанный email уже занят';
const invalidUserDataError = 'Некорректные почта или пароль';

const urlStringError = 'Строка должна быть записана в виде URL-адреса';
const rusNameMovieError = 'Название фильма должно быть на русском языке';
const engNameMovieError = 'Название фильма должно быть на английском языке';

const invalidEmailError = 'Введенный email не соответствует условиям';
const passwordSpaceError = 'Не допускается использование пробелов при создании пароля';
const nameSpaceError = 'Не допускается использование пробелов в имени';

module.exports = {
  movieIdUsedError,
  movieIdIncorrectError,
  movieNotFoundError,
  noAccessError,
  movieDeletedMessage,
  userIdIncorrectError,
  userNotFoundError,
  emailUsedError,
  invalidUserDataError,
  urlStringError,
  rusNameMovieError,
  engNameMovieError,
  invalidEmailError,
  passwordSpaceError,
  nameSpaceError,
  notFoundError,
  needAuthError,
  serverError,
  requestLimitExceedError,
};
