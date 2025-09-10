import { Film } from "./film.model.js";
import { Review } from "./review.model.js";
import { User } from "./users.model.js";

const models = { User, Film, Review };

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
export { User, Film, Review };
