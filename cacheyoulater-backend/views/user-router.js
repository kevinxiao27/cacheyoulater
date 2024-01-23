import express from "express"
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  getAllFriendCaches,
} from "../controllers/user-controller.js"

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.get("/friends/:id", getAllFriendCaches)
userRouter.post("/sign-up", createUser)
userRouter.post("/login", login)
userRouter.put("/:id", updateUser)
userRouter.put("/friend", addFriend)
userRouter.put("/unfriend", removeFriend)
userRouter.delete("/:id", deleteUser)

export default userRouter
