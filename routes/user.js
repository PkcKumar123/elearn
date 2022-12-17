import express from "express";
import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// Login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

export default router;
