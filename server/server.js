import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const uri = process.env.DATABASE_URL

app.use(express.json())
app.use(cors())
app.use('/',postsRoutes)



//                                   Database Section                                  //




mongoose.set("strictQuery", true);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server running on http://localhost:${PORT}`)
    )
  }
  )
  .catch((err) => console.log(err + " can't connect to db"));