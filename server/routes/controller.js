import express from "express"
import mongoose from "mongoose"
import postData from "../model/postSchema.js"

                                            //    Get All Posts    //

export const getPosts = async(req,res) => {
const data = await postData.find()
res.json(data)
}

                                            //    Create New Post    //

export const createPost = async(req,res) => {
    const {name,title,image}=req.body
   const saveData = await postData({name,title,image})
   await saveData.save()
   res.json(saveData)
}

                                            //    Update Post    //

export const updatePost = async(req,res) => {
    const {id} = req.params
    const {name,title,image}=req.body
// const findPost = await postData.findById(id)
// if(findPost){
//     const updateData = await postData.updateOne({name,title,image})
//     if(updateData){
//         res.json({message : "Post Updated"})
//     }else{
//         res.json({message : "Cant Update Post"})
//     }
// }else{
//     res.json({message : "Post not found"})
// }
const findAndUpdate = await postData.findByIdAndUpdate(id,{name,title,image})
if (findAndUpdate) {
   const post = await postData.findById(id)
   res.json(post)
}else{
    res.json({message : "No Post Found"})
}
}

                                            //    Delete Post   //

export const deletePost = async(req,res) => {
    const {id} = req.params
const findAndDeletePost = await postData.findByIdAndDelete(id)
if(findAndDeletePost){
        res.json({message : "Post Deleted"})
}else{
    res.json({message : "Post not found"})
}
}

