import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()


//                                   Database Section                                  //

mongoose.set("strictQuery", true);
mongoose
.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error',(err)=>console.log("Can't Connect To Db",err))
db.once('open',()=>app.listen(PORT, () =>
console.log(`Connected To Server With Port ${PORT} and Connected With Db`)
))

app.use(express.json())
app.use(cors())
app.use('/', postsRoutes)
app.use(bodyParser.urlencoded({ extended: true }));
