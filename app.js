const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

const routerUser = require('./routes/users');
const routerMovie = require('./routes/movies');

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.get('/', (req,res) => {
  res.send('Оно живое')
})


router.post('/signin', validateLogin, checkPassword, login);
router.post('/signup', validateCreateUser, createUser);
router.use(auth);
app.use('/users', routerUser);
app.use('/movies', routerMovie);
app.all('/*', notFound);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 👌`);
});
