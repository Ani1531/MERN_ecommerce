const mongoose = require('mongoose');
const bcryprt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        trim:true,
        min:4,
        max:20  
    },
    lastName :{
        type:String,
        required:true,
        trim:true,
        min:4,
        max:20  
    },
    username :{
        type:String,
        required:true,
        trim:true,
        unique: true,
        index:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    hash_passord: {
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    },
    contactNumber:{
        type:String,
        required:true,
        unique:true,
        max:10,
    },
    profilePic:{
        trype:String,
    },
},{timestamps:true});

userSchema.virtual('password').set(function(password){
    this.hash_passord = bcryprt.hashSync(password,10);
})

userSchema.methods = {
    authenticate : function () {
        return bcryprt.compareSync(password, this.hash_passord)
    }
}

module.exports = mongoose.model('User',userSchema);