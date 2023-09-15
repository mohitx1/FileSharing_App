const express=require('express');
const app=express();
require('dotenv').config();

const port=process.env.PORT|| 3000;

app.use((req,res)=>{
    res.send('Hello')
});

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
});