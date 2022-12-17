import express from "express";
import {
  addLecture,
  addNotes,
  createCourse,
  getAllCourses,
  getCourseLectures,
  getCourseNotes,
  getSingleCouseDetails,
} from "../controllers/course.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// Get All courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admin
router.route("/createcourse").post(isAuthenticated, singleUpload, createCourse);

//get single course
router
  .route("/course/:id")
  .get(isAuthenticated, getSingleCouseDetails)
  .post(isAuthenticated, singleUpload, addLecture);

//add notes
router.route("/note/:id").post(isAuthenticated, addNotes);

//get lecture
router.route("/video/lectures/:id").get(isAuthenticated, getCourseLectures);

//get lecture
router.route("/course/notes/:id").get(isAuthenticated, getCourseNotes);

export default router;
