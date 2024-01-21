import express from "express"
import {
  addCache,
  deleteCache,
  deregisterUser,
  getAllCaches,
  getBulletinById,
  registerUser,
  updateCache,
} from "../controllers/cache-controller.js"

const cacheRouter = express()

cacheRouter.get("/", getAllCaches)
cacheRouter.get("/:id", getBulletinById)
cacheRouter.post("/add", addCache)
cacheRouter.put("/:id", updateCache)
cacheRouter.put("/register/:id", registerUser)
cacheRouter.delete("/:id", deleteCache)
cacheRouter.delete("/deregister/:id", deregisterUser)

export default cacheRouter
