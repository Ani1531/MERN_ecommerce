const express = require("express");
const { AuthSignin, adminMiddleware } = require("../Auth_middeleware/Auth");
const {  } = require("../controllers/Category");
const Router = express.Router();

Router.post("/product/create",AuthSignin, adminMiddleware, ()=>{
    
});
Router.get("/catagory/getcategories",)

module.exports = Router;
