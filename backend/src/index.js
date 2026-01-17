import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./db/connectDB.js";
import V1Router from "./routes/v1/index.js";

dotenv.config();

const app = express();
const PORT = 3000;

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", V1Router);

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})