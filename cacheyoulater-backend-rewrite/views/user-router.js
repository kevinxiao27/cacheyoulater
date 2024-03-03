import express from "express";
import { check } from "express-validator";
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  getAllFriendCaches,
} from "../controllers/user-controller.js";
import auth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/friends/:id", getAllFriendCaches);
userRouter.post(
  "/sign-up",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  createUser
);
userRouter.post(
  "/login",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  login
);
userRouter.put(
  "/",
  [
    auth,
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  updateUser
);
userRouter.put("/friend/:id", addFriend);
userRouter.put("/unfriend/:id", removeFriend);
userRouter.delete("/:id", deleteUser);

export default userRouter;
