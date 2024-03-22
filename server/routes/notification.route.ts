import { isAuthenticated } from "./../middleware/auth";
import express from "express";
import { authoriseRoles } from "../middleware/auth";
import {
  getNotifications,
  updateNotificationStatus,
} from "../controllers/notification.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authoriseRoles("admin"),
  getNotifications
);

notificationRoute.put(
  "/update-notification-status/:id",
  isAuthenticated,
  authoriseRoles("admin"),
  updateNotificationStatus
);

export default notificationRoute;
