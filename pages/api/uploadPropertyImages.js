import multer from 'multer';
export default async function Upload(req, res){
  console.log(req.body)
  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})
    const upload = multer({
      storage:storage
    }).array('propimg');
    
    upload(req, res, (err)=>{
      if(err){
        console.log(err)
        res.json(`sorry something went wrong boss ${err}`)
      }
      else{
        res.json(req.file)
        console.log(`this is the file info ${req.file}`)
      }
    })
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
