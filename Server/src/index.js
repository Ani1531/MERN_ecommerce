const express = require('express');
const env = require('dotenv')
const app = express();


env.config();

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'hello server'
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("server is running at " + process.env.PORT)
})