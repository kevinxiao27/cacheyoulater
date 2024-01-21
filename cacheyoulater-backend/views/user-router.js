import express from "express"
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  deleteUser,
} from "../controllers/user-controller.js"

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/sign-up", createUser)
userRouter.post("/login", login)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

export default userRouter
