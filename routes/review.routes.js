import express from "express";
import * as reviewsController from "../controllers/review.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/:filmId",
  authenticateUser,
  asyncHandler(reviewsController.createReview)
);
router.get("/getRview", authenticateUser, asyncHandler(reviewsController.getReviewByFilmId));

export default router;
