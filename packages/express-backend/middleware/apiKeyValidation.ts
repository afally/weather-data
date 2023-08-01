// apiKeyValidation.ts

import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

// Replace 'VALID_API_KEY' with the actual valid API key you generated and stored securely
const validAPIKey = process.env.VALID_API_KEY;

const apiKeyValidation = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.query.apiKey;

  if (!apiKey || apiKey !== validAPIKey) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  next();
};

export default apiKeyValidation;
