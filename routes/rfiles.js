const router=require('express').Router();
const multer=require('multer');
const path =require('path');

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
    //Validate request
    if(!req,file){
        return res.json({error:'All fields are required.'})
    }


    //Storing files in upload folder
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).send({error: err.message})
        }
    //Storing into database
    
    })





    //Send Response--> Link
})


module.exports=router;