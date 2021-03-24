const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getUserData,
  updateUserData,
} = require('../controllers/users');
const { passwordSpaceError, nameSpaceError } = require('../utils/messageErr');

router.get('/me', getUserData);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi
      .string()
      .required()
      .email(),
    password: Joi
      .string()
      .min(8)
      .pattern(/^\S*$/)
      .message(passwordSpaceError),
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30)
      .pattern(/^\S*$/)
      .message(nameSpaceError),
  }),
}), updateUserData);

module.exports = router;
