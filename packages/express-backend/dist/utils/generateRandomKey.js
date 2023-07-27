"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const generateRandomAPIKey = (length) => {
    const byteLength = Math.ceil(length / 2); // Since each byte corresponds to two hexadecimal characters
    return crypto_1.default.randomBytes(byteLength).toString("hex");
};
// Usage example
const randomAPIKey = generateRandomAPIKey(32); // Generates a 32-character (256-bit) random API key
console.log("Random API Key:", randomAPIKey);
