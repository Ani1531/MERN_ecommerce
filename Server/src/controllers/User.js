
const User = require('../models/User');

exports.singup = (req, res,next)=>{
    User.findOne({email: req.body.email})
     .exec((error,user)=>{
        if(user){
            return  res.status(400).json({
                message : "User already registered",
            })
        }
        const {
        firstName,
        lastName,
        email,
        password,
        contactNumber,
        } = req.body;

        const newUser =  new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString(),
            contactNumber,
        })

       newUser.save((error,data)=>{
        if(error){
            return res.status(200).json({
                message:"Someting went wrong : "+error,
            })
        }
        if(data){
            return res.status(201).json({
                message: 'User registered sucessfulluy'
            })
        }
       })
     })
}