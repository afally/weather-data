const { Sequelize } = require("sequelize");
const config = require("../../config/config"); // Change this to the path of your configuration file

const sequelize = new Sequelize({
  dialect: "postgres", // Specify the dialect explicitly
  host: config.development.host,
  port: config.development.port,
  database: config.development.database,
  username: config.development.username,
  password: config.development.password,
});

// Database connection check
async function getDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  sequelize,
  getDatabaseConnection,
};
