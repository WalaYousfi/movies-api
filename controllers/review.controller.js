import { Review } from "../models/index.js";

export async function addReview(req, res) {
  const newReview = await Review.create({
    filmId: req.body.filmId,
    rating: req.body.rating,
    comment: req.body.comment,
    reviewer: req.body.reviewer,
  });
  return res.status(201).json({ message: "success", newReview });
}

export async function getReviewByFilmId(req, res) {
  const review = await Review.findOne({ where: { filmId: req.body.filmId } });
  if (review) return res.status(200).json({ message: "success", review });
  else return res.status(404).json({ error: "Not Found" });
}
