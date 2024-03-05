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

userRouter.get("/", getAllUsers);
userRouter.get(
  "/friends",
  checkHeaders,
  validateResults,
  auth,
  getAllFriendCaches
);
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
    checkHeaders,
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
    validateResults,
    auth,
  ],
  updateUser
);
userRouter.put(
  "/request-friend/:id",
  [checkHeaders, validateResults, auth],
  requestFriend
);
userRouter.delete(
  "/delete-friend/:id",
  [checkHeaders, validateResults, auth],
  removeFriend
);
userRouter.put(
  "/accept-friend/:id",
  [checkHeaders, validateResults, auth],
  acceptRequest
);
userRouter.delete(
  "/delete-request/:id",
  [checkHeaders, validateResults, auth],
  deleteRequest
);
userRouter.delete("/", [checkHeaders, validateResults, auth], deleteUser);

export default userRouter;
