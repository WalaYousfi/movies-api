import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const User = sequelize.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // name can not be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // ensure no duplicate emails are incerted
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.associate = (models) => {
  User.hasMany(models.Review, { foreignKey: "userId", as: "reviews" });
};
export { User };
