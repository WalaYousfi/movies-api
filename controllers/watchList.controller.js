import { Film, User, WatchList } from "../models/index.js";

export async function addToWatchList(req, res) {
  const watchList = await WatchList.create({
    filmId: +req.params.filmId,
    userId: req.user.id,
  });
  return res.status(201).json({
    message: "new recommendation added succefully",
    watchList,
  });
}

export async function getWatchList(req, res) {
  const watchList = await WatchList.findAll({
    where: { userId: req.user.id },
    include: [{ model: Film, as: "film", attributes: ["id", "name"] }],
  });
  if (watchList) return res.status(200).json({ message: "success", watchList });
  return res.status(404).json({ error: "watchList not found" });
}

export async function deleteFromWatchList(req, res) {
  await WatchList.destroy({
    where: { userId: req.user.id, filmId: req.params.filmId },
  });
  res.status(200).json({ message: "item deleted successfully" });
}
