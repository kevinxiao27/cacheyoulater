import express from "express";
import {
  addCache,
  deleteCache,
  getAllCaches,
  getCacheById,
  unlockCache,
  updateCache,
} from "../controllers/cache-controller.js";

const cacheRouter = express();

cacheRouter.get("/", getAllCaches);
cacheRouter.get("/:id", getCacheById);
cacheRouter.post("/add/:id", addCache);
cacheRouter.put("/:id", updateCache);
cacheRouter.put("/unlock/:id", unlockCache);
cacheRouter.delete("/:id", deleteCache);

export default cacheRouter;
