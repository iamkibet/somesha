import express from "express";
import {
  addAnswer,
  addQuestion,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  replyToReviews,
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

courseRouter.put("/add-review/:id", isAuthenticated, addReview);

courseRouter.put(
  "/add-reply",
  isAuthenticated,
  authoriseRoles("admin"),
  replyToReviews
);

courseRouter.get(
  "/get-courses",
  isAuthenticated,
  authoriseRoles("admin"),
  getAllCourses
);

courseRouter.delete(
  "/delete-course/:id",
  isAuthenticated,
  authoriseRoles("admin"),
  deleteCourse
);
export default courseRouter;
