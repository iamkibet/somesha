import express from "express";
import { editCourse, uploadCourse } from "../controllers/course.controller";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authoriseRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authoriseRoles("admin"),
  editCourse
);

export default courseRouter;
