const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path')
const port=process.env.PORT|| 3000;


const connectDB=require('./config/db');
connectDB();

//Routes
app.use('/api/files',require('./routes/files'))

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
});