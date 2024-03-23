import express from "express";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authoriseRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  isAuthenticated,
  authoriseRoles("admin"),
  editLayout
);

layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
