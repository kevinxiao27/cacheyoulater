import express from "express"
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../controllers/user-controller.js"

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/sign-up", createUser)
userRouter.post("/login", login)
userRouter.put("/:id", updateUser)
userRouter.put("/friend/:id", addFriend)
userRouter.put("/unfriend/:id", removeFriend)
userRouter.delete("/:id", deleteUser)

export default userRouter
