const express = require("express");
const { addCategory } = require("../controllers/Category");
const Router = express.Router();

Router.post("/category/create", addCategory);

module.exports = Router;
