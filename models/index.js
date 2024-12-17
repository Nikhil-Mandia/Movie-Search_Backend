import { Sequelize, DataTypes } from "sequelize";
import FavouriteModel from "./favourite.js";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, dialect, DB_PORT=3306 } = process.env;
const sequelize = new Sequelize.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: dialect || "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  timezone: "+05:30",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Favourite: FavouriteModel(sequelize, DataTypes),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

Object.keys(DB).forEach((modelName) => {
  if (DB[modelName].associate) {
    DB[modelName].associate(DB);
  }
});

export { DB };
