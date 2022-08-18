const Product = require('../models/Product');
const  slugify  = require('slugify');
const { json } = require('express');

exports.addProduct = (req,res,next)=>{
    // res.status(200).json({file: req.files, body:req.body })
    const {name,price, description,quantity, category,createdBy } = req.body;
    let productPictures = []

    if(req.files.length>0){
        productPictures= req.files.map((file)=>{
            return { img: file.fieldname }
        })
    }
    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      description,
      quantity,
      productPictures,
      category,
      createdBy: req.user._id
    });

    product.save((error, product) =>{
        if(error) return res.status(400).json({error})
        if(product){
            res.status(400).json({product})
        }
    })
}