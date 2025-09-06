import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";
import { Film } from "./index.js";

const Review = sequelize.define("reviews", {
  // Foreign key to associate with Film
  filmId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Film, // References the films table //Direct model reference
      key: "id",
    },
  },

  // Rating (from 1 to 5 stars)
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },

  comment: {
    type: DataTypes.TEXT,
    allowNull: true, // Optional comment
  },

  // Reviewer name
  reviewer: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // Review date
  reviewDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export { Review };
