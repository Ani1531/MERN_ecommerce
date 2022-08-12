
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

exports.singup = (req, res,next)=>{
    User.findOne({email: req.body.email})
     .exec((error,user)=>{
        if(user){
            return  res.status(400).json({
                message : "admin already registered",
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
            role : 'admin'
        })

       newUser.save((error,data)=>{
        if(error){
            return res.status(200).json({
                message:"Someting went wrong : "+error,
            })
        }
        if(data){
            return res.status(201).json({
                message: 'Admin registered sucessfulluy'
            })
        }
       })
     })
}

exports.singin = (req, res,next)=>{
    User.findOne({email:req.body.email})
    .exec((error, user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const  token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN,{expiresIn : '1h'});
                const {_id,firstName,lastName,email, role,fullName} = user;
                res.status(200).json({
                    token,
                    user:{ _id, firstName,lastName,email, role,fullName }
                })
            }
            else{
                return res.status(400).json({
                    message: 'Invalid Password',
                })
            }
        }
        else{
            return res.status(400).json({message: 'something went wrong'})
        }
    })
}

exports.AuthSignin = (req, res, next)=>{
    const token = req.headers.authorization.split(' ')[1]
    const user = jwt.verify(token,process.env.JWT_TOKEN);
    req.user = user;
    next();
}