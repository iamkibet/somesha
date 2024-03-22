import {
  getAllUsers,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "./../controllers/user.controller";
import express from "express";
import {
  activateUser,
  getUserInfo,
  logOutUser,
  loginUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
} from "../controllers/user.controller";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAuthenticated, authoriseRoles("admin"), logOutUser);

userRouter.get("/refresh", updateAccessToken);

userRouter.get("/me", isAuthenticated, getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);

userRouter.put("/updatepassword", isAuthenticated, updatePassword);

userRouter.put("/updateavatar", isAuthenticated, updateProfilePicture);

userRouter.get(
  "/get-users",
  isAuthenticated,
  authoriseRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-user-role",
  isAuthenticated,
  authoriseRoles("admin"),
  updateUserRole
);

export default userRouter;
