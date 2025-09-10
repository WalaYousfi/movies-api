import express from "express";
import * as filmController from "../controllers/film.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateAdmin } from "../middlewares/admin.middleware.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", asyncHandler(filmController.getFilms));

router.post(
  "/",
  authenticateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(filmController.createFilm)
);
router.put(
  "/:id",
  authenticateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(filmController.updateFilm)
);
router.delete(
  "/:id",
  authenticateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(filmController.deleteFilm)
);
router.get("/:id", asyncHandler(filmController.getFilm));

export default router;
