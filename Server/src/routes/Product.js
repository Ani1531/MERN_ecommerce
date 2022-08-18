const express = require("express");
const { AuthSignin, adminMiddleware } = require("../Auth_middeleware/Auth");
const { addProduct } = require("../controllers/Product");
const multer = require('multer');
const Router = express.Router();
const path = require('path');


const shortid  = require('shortid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads') )
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, shortid.generate() + '-' + file.originalname )
    }
  })

  const upload = multer({storage})

Router.post("/product/create",AuthSignin, adminMiddleware, upload.array('productPicture'), addProduct);
// Router.get("/catagory/getcategories",)

module.exports = Router;
