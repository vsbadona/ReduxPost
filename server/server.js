import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () =>
console.log(`Connected To Server With Port ${PORT}`)
)
app.use(express.json())
app.use(cors())
app.use('/', postsRoutes)

//                                   Database Section                                  //

mongoose.set("strictQuery", true);
mongoose
.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
        console.log(`Connected To Db`)
}
)
.catch((err) => console.log(err + " can't connect to db"));