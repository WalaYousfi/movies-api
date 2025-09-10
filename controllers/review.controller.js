import { Review } from "../models/index.js";

export async function createReview(req, res) {
  const review = await Review.create({
    rating: req.body.rating,
    text: req.body.text,
    filmId: +req.params.filmId, // we made castTo from string to  number (+)
    userId: req.user.id,
  });
  return res.status(201).json({ message: "success", review });
}

export async function getReviewByFilmId(req, res) {
  const review = await Review.findOne({ where: { filmId: req.body.filmId } });
  if (review) return res.status(200).json({ message: "success", review });
  else return res.status(404).json({ error: "Not Found" });
}
