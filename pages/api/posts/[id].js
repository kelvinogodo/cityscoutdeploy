import Post from '../../../models/postModel'
import {connectMongo} from '../../../utils/connectMongo'
export default async function handler({query:{id}}, res) {
    await connectMongo()
    console.log('FETCHING DATA')
    const posts = await Post.find() 
        const filteredPost = posts.filter(post => post.title.trim() == id)
        if(filteredPost.length > 0){
            res.status(200).json(filteredPost[0])
            console.log(filteredPost)
        }
        else{
            res.status(404).json({body:'real eatate', image:'realestate (19).jpg', title:'real estate'},filteredPost)
        }
}