import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', postsRoutes)
app.listen(PORT,()=>console.log(`App Is Listening On http://localhost:${PORT}`))

//                                   Database Section                                  //

mongoose.set("strictQuery", true);
mongoose
.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () =>
        console.log(`server running on http://localhost:${PORT}`)
    )
}
)
.catch((err) => console.log(err + " can't connect to db"));