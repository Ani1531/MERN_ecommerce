const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("../dbConnection");


const UserRoutes = require('./routes/User')

env.config();

app.use(bodyParser.json());

app.use('/api',UserRoutes)


app.listen(process.env.PORT, ()=>{
    console.log("server is running at " + process.env.PORT)
});