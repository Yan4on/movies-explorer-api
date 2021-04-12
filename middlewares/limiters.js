const rateLimit = require('express-rate-limit');
const { requestLimitExceedError } = require('../utils/messageErr');

const limiter = rateLimit({
  windowMs: 300000, // 5 минут
  max: 600, // максимальное число запросов в заданый выше период
  message: requestLimitExceedError,
});

module.exports = limiter;
