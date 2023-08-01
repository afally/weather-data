"use strict";
// apiKeyValidation.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//apiKeyValidation
const validAPIKey = process.env.VALID_API_KEY;
const apiKeyValidation = (req, res, next) => {
    const apiKey = req.query.apiKey;
    if (!apiKey || apiKey !== validAPIKey) {
        return res.status(401).json({ error: "Invalid API key" });
    }
    next();
};
exports.default = apiKeyValidation;
