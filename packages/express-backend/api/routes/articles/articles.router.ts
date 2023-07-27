import express, { Router } from "express";
import getArticles from "./articles.controller";

const articlesRouter: Router = express.Router();

// api/questions
articlesRouter.get("/", getArticles);

export default articlesRouter;
