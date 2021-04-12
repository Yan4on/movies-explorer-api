const corsOptions = {
  origin: [
    'https://api.find-films.students.nomoredomains.icu',
    'https://find-films.students.nomoredomains.icu',
    'http://find-films.students.nomoredomains.icu',
    'https://www.find-films.students.nomoredomains.icu',
    'http://www.find-films.students.nomoredomains.icu',
    'http://api.find-films.students.nomoredomains.icu',
    'https://www.api.find-films.students.nomoredomains.icu',
    'http://www.api.find-films.students.nomoredomains.icu',
    'http://127.0.0.1:3001',
    'localhost:3000',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'x-access-token'],
};

module.exports = { corsOptions };
