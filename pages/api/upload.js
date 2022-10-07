import nextConnect from 'next-connect';
import multer from 'multer';

export default async function upload(req, res){
  res.send('im working')
  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
    const upload = multer({
      storage:storage
    });
    
    apiRoute.use(upload.single('theFiles'));
    
    apiRoute.post((req, res) => {
      res.status(200).json({ data: 'success' });
    });
    
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
