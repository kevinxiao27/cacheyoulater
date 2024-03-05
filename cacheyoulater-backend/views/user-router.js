import express from "express";
import { check } from "express-validator";
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  deleteUser,
  requestFriend,
  getAllFriendCaches,
  acceptRequest,
  deleteRequest,
  removeFriend,
} from "../controllers/user-controller.js";
import auth from "../middlewares/auth.js";
import { checkHeaders } from "../middlewares/headers.js";
import { validateResults } from "../middlewares/validation.js";

const userRouter = express.Router();

const authChecks = [checkHeaders, validateResults, auth];

userRouter.get("/", getAllUsers);
userRouter.get("/friends", authChecks, getAllFriendCaches);
userRouter.post(
  "/sign-up",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  validateResults,
  createUser
);
userRouter.post(
  "/login",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
    validateResults,
  ],
  login
);
userRouter.put(
  "/",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
    authChecks,
  ],
  updateUser
);
userRouter.put("/request-friend/:id", authChecks, requestFriend);
userRouter.delete("/delete-friend/:id", authChecks, removeFriend);
userRouter.put("/accept-friend/:id", authChecks, acceptRequest);
userRouter.delete("/delete-request/:id", authChecks, deleteRequest);
userRouter.delete("/", authChecks, deleteUser);

export default userRouter;
