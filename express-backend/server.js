const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const winston = require("winston");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const setupSwagger = require("./swagger");
const {
  getDatabaseConnection,
  sequelize,
} = require("./api/utils/getDatabaseConnection");

const loginRouter = require("./api/routes/auth/login.router");
const registerRouter = require("./api/routes/auth/register.router");
const searchRouter = require("./api/routes/sensor/search.router");
const uploadRouter = require("./api/routes/sensor/upload.router");

dotenv.config();

const app = express();

setupSwagger(app);

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(cookieParser());

// Logger configuration
const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

// Establish the database connection first
getDatabaseConnection().then(() => {
  // Routes
  app.use(loginRouter);
  app.use(registerRouter);
  app.use(searchRouter);
  app.use(uploadRouter);

  // Defined routes to handle requests that don't match any other routes.
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    next(error);
  });

  // Error handling middleware.
  app.use((err, req, res) => {
    logger.error(
      `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
        req.method // eslint-disable-next-line comma-dangle
      } - ${req.ip}`
    );
    res.status(err.status || 500).json({ error: err.message });
  });

  // Start the server
  const PORT = process.env.PORT || 3001;
  const server = app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}...`);
  });

  // Handle termination signal (SIGINT) to gracefully exit
  process.on("SIGINT", () => {
    logger.info("Server is shutting down...");
    // Close the database connection before exiting
    // Assuming sequelize is defined globally somewhere else
    sequelize.close().then(() => {
      logger.info("Database connection closed.");
      server.close(() => {
        logger.info("Server has been terminated.");
        process.exit(0);
      });
    });
  });
});

module.exports = app;
