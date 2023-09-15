const router=require('express').Router();
const multer=require('multer');



router.post('/',(req,res)=>{
    //Validate request
    if(!req,file){
        return res.json({error:'All fields are required.'})
    }


    //Storing files in upload folder


    //Storing into database


    //Send Response--> Link
})


module.exports=router;