"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_controller_1 = __importDefault(require("./articles.controller"));
/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all articles
 *     description: Retrieve a list of all articles
 *     parameters:
 *       - in: query
 *         name: apiKey
 *         required: true
 *         description: Your API key for authentication.
 *         schema:
 *           type: string
 *         example: "5aa965eb8e501bff4bde01b13de411e5"
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
const articlesRouter = express_1.default.Router();
// api/questions
articlesRouter.get("/", articles_controller_1.default);
exports.default = articlesRouter;
