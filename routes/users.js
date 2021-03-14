const routerUser = require('express').Router();


routerUser.get('/me');
routerUser.patch('/me');

module.exports = routerUser;