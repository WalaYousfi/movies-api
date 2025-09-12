import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Film = sequelize.define("films", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, //auto increment in SQLite
    primaryKey: true, // mark as primary key // unique PK
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Film.associate = (models) => {
  Film.hasMany(models.Review, { foreignKey: "filmId", as: "reviews" });

  Film.hasMany(models.WatchList, { foreignKey: "filmId", as: "watchLists" });
};
export { Film };
