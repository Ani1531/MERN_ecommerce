const express = require('express');
const Router = express.Router();
const {singup} = require('../controllers/User');

Router.get('/signin',(req,res,next)=>{
});

Router.post('/signup',singup)

module.exports = Router;