const express = require("express");
const {
  validateSignUpReq,
  validateSignInReq,
  isReqValidated,
} = require("../../Validators/User");
const Router = express.Router();
const { singup, singin } = require("../../controllers/admin/admin");

Router.post("/admin/signup", validateSignUpReq, isReqValidated, singup);
Router.post("/admin/signin", validateSignInReq, isReqValidated, singin);

module.exports = Router;
