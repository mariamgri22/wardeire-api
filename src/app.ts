import express from "express";
import UserRouter from "./routes/userRouter";
import ContentRouter from "./routes/contentRoutes";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(cors());

app.use(UserRouter);
app.use(ContentRouter);

export default app;
