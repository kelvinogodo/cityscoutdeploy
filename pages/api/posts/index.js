import Post from '../../../models/postModel'
import {connectMongo} from '../../../utils/connectMongo'
export default async function handler(req, res) {
    await connectMongo()
    console.log('FETCHING DATA')
    const posts = await Post.find() 
    if(posts !== []){ res.status(200).json(posts)}
    else{ res.status(200).json([])}
}