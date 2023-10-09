const express = require('express');
const userRoutes = express.Router();
// const authController = require('./controllers/authController');
// const homeController = require('./controllers/homeController');
const {signupUser, loginUser} = require('../Controller/UserController')

// userRoutes.get('/', homeController.index);
// userRoutes.get('/login', authController.login);
userRoutes.post('/login', loginUser);
userRoutes.post('/signup', signupUser);
// router.post('/signup', authController.create);

module.exports = userRoutes;
