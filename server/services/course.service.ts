import { Response } from "express";
import CourseModel from "../models/course.model";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import courseModel from "../models/course.model";

//create course
export const createCourse = catchAsyncError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);

//get all course

export const getAllCoursesService = async (res: Response) => {
  const courses = await courseModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    courses,
  });
};
