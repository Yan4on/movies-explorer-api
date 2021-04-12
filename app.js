require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/index');
const limiter = require('./middlewares/limiters');
const errorsHandler = require('./middlewares/errorsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mongoPath = require('./utils/config');
// const { corsOptions } = require('./utils/cors-option');

const { NODE_ENV, MONGO_URL } = process.env;

const PORT = 3000;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : mongoPath, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const allowedCors = [
  'https://find-films.students.nomoredomains.icu',
  'http://find-films.students.nomoredomains.icu',
  'https://www.find-films.students.nomoredomains.icu',
  'http://www.find-films.students.nomoredomains.icu',
  'https://api.find-films.students.nomoredomains.icu',
  'http://api.find-films.students.nomoredomains.icu',
  'https://www.api.find-films.students.nomoredomains.icu',
  'http://www.api.find-films.students.nomoredomains.icu',
  'http://127.0.0.1:3001',
  'localhost:3000',
];

app.use(cors());
app.use((req, res, next) => {
  const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок

  if (allowedCors.includes(origin)) {
    // Проверяем, что значение origin есть среди разрешённых доменов
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  }

  next();
});

// app.use('*', cors(corsOptions));
app.use(requestLogger); // Логгер запросов
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);
app.use('/', router);
app.use(errorLogger); // Логгер ошибок
app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 👌`);
});
