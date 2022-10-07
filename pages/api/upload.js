import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path'
export default async function upload(req, res){
  const storage = multer.diskStorage({
  destination: './public/',
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + path.extname)
  },
})
    const upload = multer({
      storage:storage
    });
    
    const apiRoute = nextConnect({
      onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
      },
      onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
      },
    });

    apiRoute.use(upload.single('theFiles'));

    res.send('we are up and running')
    
//     apiRoute.post((req, res) => {
//       res.status(200).json({ data: 'success' });
//     });  
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
