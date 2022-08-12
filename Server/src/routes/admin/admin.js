const express = require('express');
const Router = express.Router();
const {singup,singin,AuthSignin} = require('../../controllers/admin/admin');

Router.post('/admin/signup',singup)
Router.post('/admin/signin',singin);

module.exports = Router;