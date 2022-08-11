const express = require('express');
const Router = express.Router();
const {singup,singin} = require('../controllers/User');

Router.post('/signup',singup)
Router.post('/signin',singin);

module.exports = Router;