require("dotenv").config(); // Load environment variables from .env file

const config = {
  development: {
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    dialect: "postgres",
  },
  // test: {
  //   username: process.env.TEST_USERNAME,
  //   password: process.env.TEST_PASSWORD,
  //   database: process.env.TEST_DATABASE,
  //   host: process.env.TEST_HOST,
  //   port: process.env.TEST_PORT,
  //   dialect: "postgres",
  // },
  // production: {
  //   username: process.env.PROD_USERNAME,
  //   password: process.env.PROD_PASSWORD,
  //   database: process.env.PROD_DATABASE,
  //   host: process.env.PROD_HOST,
  //   port: process.env.PROD_PORT,
  //   dialect: "postgres",
  // },
};

// Now you can access the configuration based on the environment
module.exports = config;
