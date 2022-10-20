import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
       const post = await Post.findOne({"_id": req.body.id})
        if(post.body !== req.body.body && req.body.body !== 'undefined'){
            await Post.updateOne({"_id": req.body.id},{
                $set : {body : req.body.body}
            })
        }
        if(req.body.image == ''){
            return
        }else{
            await Post.updateOne({"_id": req.body.id},{
                $set : {image : req.body.image},
                $set : {title: req.body.title}
            })
        }

        res.status(200).json({status:200})
        console.log("post successfully updated")
    } catch (error) {
        console.log(error)
        res.json(error)
        res.status(500)
    }
}