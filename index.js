import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import filmRouter from "./routes/film.routes.js";
import reviewRouter from "./routes/review.routes.js";
import { createDefaultAdmin } from "./utils/admin.js";
const port = process.env.PORT || 3000;

initDB().then(() => {
  createDefaultAdmin();
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

app.use("/api/auth", authRouter);
app.use("/api/films", filmRouter);
app.use("/api/reviews", reviewRouter);

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
