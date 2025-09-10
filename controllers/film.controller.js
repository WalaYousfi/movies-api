import { Film } from "../models/index.js";

export async function getFilms(req, res) {
  const films = await Film.findAll();
  res.status(200).json({ films });
}

export async function createFilm(req, res) {
  const film = await Film.create({
    name: req.body.name,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
  });
  res.status(201).json({ message: "film created successfully", film });
}

export async function updateFilm(req, res) {
  const film = await Film.findByPk(req.params.id);
  if (!film) return res.status(404).json({ error: "film not found" });
  film.name = req.body.name;
  film.genre = req.body.genre;
  film.releaseDate = req.body.releaseDate;
  await film.save();
  res.status(200).json({ message: "film updated successfully", film });
}

export async function deleteFilm(req, res) {
  const film = await Film.findByPk(req.params.id);
  if (!film) return res.status(404).json({ error: "film not found" });

  await film.destroy();
  res.status(200).json({ message: "film deleted successfully" });
}

export async function getFilm(req, res) {
  const film = await Film.findByPk(req.params.id);
  if (film) return res.status(200).json({ message: "success", film });
  else return res.status(404).json({ error: "film not found" });
}

// createFilm , edit, delete
// getAllFilm getfilmById
// addReview getReviewByMovvieId
// validation
// name genre releaseDate {date}
