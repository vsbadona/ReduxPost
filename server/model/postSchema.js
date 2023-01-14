import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const postData = mongoose.model("posts",postSchema)
export default postData