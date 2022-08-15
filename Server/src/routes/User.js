const express = require("express");
const {
  validateSignUpReq,
  validateSignInReq,
  isReqValidated,
} = require("../Validators/User");
const Router = express.Router();
const { singup, singin } = require("../controllers/User");

Router.post("/signup", validateSignUpReq, isReqValidated, singup);
Router.post("/signin", validateSignInReq, isReqValidated, singin);

module.exports = Router;
