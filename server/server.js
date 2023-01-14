import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT
const url = process.env.DATABASE_URL

app.use(express.json())
app.use(cors())
app.use('/',postsRoutes)

app.listen(PORT,()=>console.log(`App is working on http://localhost:${PORT}`))


//                                   Database Section                                  //

mongoose.connect(url)
mongoose.set('strictQuery', true);
const db = mongoose.connection
db.on('error',(err)=>console.log("Can't Connect To Db"))
db.once('open',()=>console.log("Connected To Db"))