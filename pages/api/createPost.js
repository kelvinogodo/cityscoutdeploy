import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    await connectMongo() 
    try {
        Post.create({
            title:req.body.title,
            body:req.body.body,
            date:req.body.date !== 'undefined' ? req.body.date : Date.toLocaleString(),
            author:req.body.author,
            image:req.body.image,
            category:req.body.category
        })
        res.json('created')
    } catch (error) {
        res.json(error)
    }
}