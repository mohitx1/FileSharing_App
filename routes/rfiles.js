const router=require('express').Router();
const multer=require('multer');
const path =require('path');
const {v4: uuid} = require('uuid');


//Imported from local
const File=require('../models/mfiles')

let storage = multer.diskStorage({
    destination:(req, file, cb)=> cb(null, 'uploads/'),
    filename:(req, file, cb) => {
        const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
        // 342354134354-838294760.jpg

        cb(null, uniqueName);
    }
})


let upload= multer({
    storage,
    limit: {fileSize: 100000*100}, //about 100mb
}).single('myfile');

router.post('/',(req,res)=>{

    upload(req,res, async(err)=>{
        //Validate request
        if(!req.file){
            return res.json({error:'All fields are required.'})
        }


    //Storing files in upload folder
        if(err){
            return res.status(500).send({error: err.message})
        }
    //Storing into database
        const file=new File({
            fileName: req.file.filename,
            uuid:  uuid(),
            path: req.file.path,
            size: req.file.size
        });

        const response= await file.save();
        return res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
        //http://localhost:3000/files/nsjfhsdfsdfjsdj-fdsfsdfasfgre
    });





    //Send Response--> Link
})


module.exports=router;