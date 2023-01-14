import express from "express"
import { getPosts,createPost,updatePost,deletePost} from "./controller.js"
const routes = express.Router()

routes.get('/posts',getPosts)
routes.post('/posts',createPost)
routes.patch('/posts/:id',updatePost)
routes.delete('/posts/:id',deletePost)

export default routes