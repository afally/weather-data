import crypto from "crypto";

const generateRandomAPIKey = (length: number): string => {
  const byteLength = Math.ceil(length / 2); // Since each byte corresponds to two hexadecimal characters
  return crypto.randomBytes(byteLength).toString("hex");
};

// Usage example
const randomAPIKey: string = generateRandomAPIKey(32); // Generates a 32-character (256-bit) random API key
console.log("Random API Key:", randomAPIKey);
