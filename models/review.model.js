import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Review = sequelize.define("reviews", {
  // Rating (from 1 to 5 stars)
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  text: {
    type: DataTypes.STRING,
    allowNull: false, // Optional comment
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  filmId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Review.associate = (models) => {
  // each review is tied to a single movie
  Review.belongsTo(models.Film, { foreignKey: "filmId", as: "film" });
  // each review is tied to a single user
  Review.belongsTo(models.User, { foreignKey: "userId", as: "user" });
};
export { Review };
