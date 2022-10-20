import { Schema, models, model } from "mongoose";

const postSchema = new Schema({
    title: {type:String, required:true},
    image:{type:String, required:true},
    body:{type:String,required:true},
    date:{type:String,required:true},
    author:{type:String,required:true},
    category:{type:String,required:true},
    alt:{type:String,},
    seoTitle:{type:String,},
    meta:{type:String,},
})

const Post = models.Post || model('Post', postSchema)
export default Post;