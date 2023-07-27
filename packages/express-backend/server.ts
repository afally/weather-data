import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import winston from "winston";
import apiKeyValidation from "./utils/apiKeyValidation";

import { Request, Response, NextFunction } from "express";
import articlesRouter from "./api/routes/articles/articles.router";

dotenv.config();

const app = express();

//Authorization
//const validAPIKey = process.env.VALID_API_KEY;

//console.log(validAPIKey);
// Middleware
app.use(cors()); // Allowing all origins by default.
app.use(express.json()); // Parses incoming JSON requests.
// Use the apiKeyValidation middleware before article routes that need API key validation
// app.use(apiKeyValidation);

// Mounted the articlesRouter to handle requests to the root URL ("/").
//It was specified in the task to only have one route
// app.use("/", articlesRouter);
app.use("/", apiKeyValidation, articlesRouter);
// Logger configuration
const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

// Defined a route to handle requests that don't match any other routes.
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not Found");
  //error.status = 404;
  next(error);
});

// Error handling middleware.
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
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
  // Perform any cleanup or necessary actions here before exiting
  server.close(() => {
    logger.info("Server has been terminated.");
    process.exit(0);
  });
});
export default app;
