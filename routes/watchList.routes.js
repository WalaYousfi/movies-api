import express from "express";
import * as watchListController from "../controllers/watchList.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post(
  "/:filmId",
  authenticateUser,
  asyncHandler(watchListController.addToWatchList)
);
router.get(
  "/",
  authenticateUser,
  asyncHandler(watchListController.getWatchList)
);
router.delete(
  "/:filmId",
  authenticateUser,
  asyncHandler(watchListController.deleteFromWatchList)
);

export default router;
