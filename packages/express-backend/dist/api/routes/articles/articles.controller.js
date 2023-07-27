"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const articles_model_1 = require("../../models/articles.model");
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!articles_model_1.articleOptions) {
            res.status(404).json({
                status: "error",
                totalResults: 0,
                message: "No articles",
            });
        }
        else {
            res.status(200).json({
                status: "success",
                totalResults: articles_model_1.articleOptions.length,
                data: {
                    articleOptions: articles_model_1.articleOptions,
                },
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: "Something went wrong",
        });
    }
});
exports.default = getArticles;
