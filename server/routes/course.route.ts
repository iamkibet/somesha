import express from "express";
import {
  addAnswer,
  addQuestion,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
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

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

courseRouter.put("/add-question", isAuthenticated, addQuestion);

courseRouter.put("/add-answer", isAuthenticated, addAnswer);

export default courseRouter;
