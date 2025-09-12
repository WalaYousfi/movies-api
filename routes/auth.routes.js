import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { loginValidator } from "../validators/auth.validators.js";
import { validateRequest } from "../middlewares/validator.middleware.js";
const router = express.Router();

router.post(
  "/login",
  loginValidator(),
  validateRequest,
  asyncHandler(authController.login)
); //change it to this router.post("/login",loginValidator(), asyncHandler(authController.login));

router.post("/register", asyncHandler(authController.register));

router.get(
  "/me",
  authenticateUser,
  asyncHandler(authController.getCurrentUser)
);

export default router;
