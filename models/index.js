import { Film } from "./film.model.js";
import { Review } from "./review.model.js";
import { User } from "./users.model.js";
import { WatchList } from "./watchList.model.js";

const models = { User, Film, Review, WatchList };

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
export { User, Film, Review, WatchList };
