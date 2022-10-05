import Post from '../../models/postModel'
import {connectMongo} from '../../utils/connectMongo'
export default async function handler(req, res) {
    await connectMongo()
    console.log('FETCHING DATA')
    const posts = await Post.find() 
    // !== null ? res.status(200).json(posts) : res.status(200).json([])
    console.log('posts successfully fetched')
    console.log(posts)
    return res.status(200).json([]) 
}