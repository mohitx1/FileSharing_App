const router=require('express').Router();

const File=require('../models/mfiles')

router.get('/:uuid',async(req,res)=>{
    try{
        const file = await File.findOne({uuid: req.params.uuid});
        if (!file){
            return res.render('download', {error: 'Link has been Expired'})
        }
        return res.render('download',{
            uuid:file.uuid,
            fileName: file.filename,
            fileSize:file.size,
            download:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            //http://localhost:3000/files/download/jfdkfjds-dsfsdfs-hghfd
        })
    } catch (err){
        return res.render('download', {error: 'something went wrong'})
    }

});




module.exports=router;