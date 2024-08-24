const express = require('express')
const app= express();
const errorMiddleware=require('./middlewares/error');
// const cookieParser = require('cookie-parser');


//middlewares
app.use(express.json());
// app.use(cookieParser());


//routes


app.use(errorMiddleware);
module.exports = app;