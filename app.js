const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path')
const port=process.env.PORT|| 3000;


const connectDB=require('./config/db');
connectDB();

app.use((req,res)=>{
    res.send('Hello')
});

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
});