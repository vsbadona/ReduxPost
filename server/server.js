import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import bodyParser from "body-parser";
import postsRoutes from "./routes/postsRoutes.js";
env.config();

const app = express();
app.use(express.json());
// Set up body parser to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", postsRoutes);

const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
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
