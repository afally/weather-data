import express, { Router } from "express";
import getArticles from "./articles.controller";
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
const articlesRouter: Router = express.Router();

// api/questions
articlesRouter.get("/", getArticles);

export default articlesRouter;
