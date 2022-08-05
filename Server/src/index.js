const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require("../dbConnection");

env.config();

app.use(bodyParser())

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'hello server'
    })
})

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        data : req.body
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("server is running at " + process.env.PORT)
})