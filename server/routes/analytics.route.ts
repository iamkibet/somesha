import express from "express";
import {
  getCoursesAnalytics,
  getOrdersAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";

const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-user-analytics",
  isAuthenticated,
  authoriseRoles("admin"),
  getUserAnalytics
);

analyticsRouter.get(
  "/get-courses-analytics",
  isAuthenticated,
  authoriseRoles("admin"),
  getCoursesAnalytics
);

analyticsRouter.get(
  "/get-orders-analytics",
  isAuthenticated,
  authoriseRoles("admin"),
  getOrdersAnalytics
);
export default analyticsRouter;
