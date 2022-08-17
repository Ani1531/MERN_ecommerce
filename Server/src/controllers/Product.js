const Product = require('../models/Product');

exports.addProduct = (req,res,next)=>{
    res.status(200).json({file: req.file, body:req.body })
}