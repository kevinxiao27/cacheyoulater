import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./views/user-router.js";
import cacheRouter from "./views/cache-router.js";

dotenv.config();

function createServer() {
  const app = express();

  app.use(express.json());
  app.use("/user", userRouter);
  app.use("/cache", cacheRouter);

  mongoose.connect(`${process.env.MONGODB_URI}`).catch((e) => console.log(e));

  return app;
}

export default createServer;
