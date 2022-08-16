const express = require("express");
const { AuthSignin, adminMiddleware } = require("../Auth_middeleware/Auth");
const { addCategory, getCategories } = require("../controllers/Category");
const Router = express.Router();

Router.post("/category/create",AuthSignin, adminMiddleware, addCategory);
Router.get("/catagory/getcategories", getCategories)

module.exports = Router;
