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
router.get("/:filmId", asyncHandler(reviewsController.getReviewByFilmId));

export default router;



//watchList {movieId , userId}
//associate belongTo (user & film)
//user.hasMany to watchList
//film.hasMany to watchList
//controller: addToWatchList (+ to filmId)
// getWatchList (include)
// removeFromWatchList (destroy) 

// search joi validation (backend)
//why use validation and where exactly
//search npm i express-validator
// create folder (validators/auth.validators.js : create function loginValidator())
// create middleware (validator.middleware.js) : create function validateRequest()