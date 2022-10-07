import multer from 'multer';
export default async function Upload(req, res){
  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})
    const upload = multer({
      storage:storage
    }).single('theFiles');
    
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

    // const apiRoute = nextConnect({
    //   onError(error, req, res) {
    //     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    //   },
    //   onNoMatch(req, res) {
    //     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    //   },
    // });

    // apiRoute.use();
    
//     apiRoute.post((req, res) => {
//       res.status(200).json({ data: 'success' });
//     });  
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
