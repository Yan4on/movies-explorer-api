// const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Это поле обязательное для заполнения'],
    unique: [true, 'Пользователь с данным e-mail уже зарегистрирован'],
    validate: {
    },
  },
  password: {
    type: String,
    required: [true, 'Это поле обязательное для заполнения'],
    select: false,
  },
  name: {
    type: String,
    minlength: [2, 'Длина имени от 2 до 30 символов'],
    maxlength: [30, 'Длина имени от 2 до 30 символов'],
  }
});


module.exports = mongoose.model('user', userSchema);