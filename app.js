const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path')
const port=process.env.PORT|| 3000;


const connectDB=require('./config/db');
connectDB();

//TemplateEngine
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')

//Routes
app.use('/api/files',require('./routes/rfiles'))
app.use('/files',require('./routes/show'))

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
});