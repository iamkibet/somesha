import express from "express";
import { activateUser, logOutUser, loginUser, registrationUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", logOutUser);

export default userRouter;
