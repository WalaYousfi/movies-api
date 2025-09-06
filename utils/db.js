import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_FILE_NAME,
});

export async function initDB() {
  try {
    await sequelize.sync();
    console.log("database running");
  } catch (error) {
    console.log("database not working");
  }
}

export default sequelize;

// search squelize
// sqlite3
// relational
// DB types
// management system database 
//database