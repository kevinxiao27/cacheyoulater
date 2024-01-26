// import express from "express"
// import mongoose, { connect } from "mongoose"
import dotenv from "dotenv";
import createServer from "./utils/server.js";
import cors from "cors";

dotenv.config();
const app = createServer();

let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

app.listen(8080, async () => {
  console.log("Connected to MongoDB and running at http://localhost:8080");
});
