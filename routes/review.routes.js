import express from "express";
import {
  addReview,
  getReviewByFilmId,
} from "../controllers/review.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/addReview", authenticateUser, asyncHandler(addReview));
router.get(
  "/getRview",
  authenticateUser,
  asyncHandler(getReviewByFilmId)
);

export default router;
