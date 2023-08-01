import { ArticleTypes, articleOptions } from "../../models/articles.model";
import { Request, Response } from "express";

//Controller getArticles

const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!articleOptions.length) {
      res.status(404).json({
        status: "error",
        totalResults: 0,
        message: "No articles",
      });
    } else {
      res.status(200).json({
        status: "success",
        totalResults: articleOptions.length,
        data: articleOptions,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

export default getArticles;
