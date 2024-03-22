import { isAuthenticated } from "./../middleware/auth";
import express from "express";
import { authoriseRoles } from "../middleware/auth";
import { getNotifications } from "../controllers/notification.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authoriseRoles("admin"),
  getNotifications
);

export default notificationRoute;
