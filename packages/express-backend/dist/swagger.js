"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "News API Documentation",
            version: "1.0.0",
            description: "News API Documentation",
        },
        components: {
            // Add the components section
            schemas: {
                Article: {
                    // Define the Article schema here
                    type: "object",
                    properties: {
                        title: { type: "string" },
                        author: { type: "string" },
                        imageUrl: { type: "string" },
                        description: { type: "string" },
                        source: {
                            type: "object",
                            properties: {
                                Id: { type: ["string", "null"] },
                                name: { type: "string" },
                            },
                        },
                        publishedAt: { type: "string" },
                        url: { type: "string" },
                    },
                },
            },
        },
    },
    apis: ["./api/routes/articles/articles.router.ts"], // Replace with the path to your route files
};
const specs = (0, swagger_jsdoc_1.default)(options);
function setupSwagger(app) {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
}
exports.default = setupSwagger;
// Example usage:
// const app = express();
// setupSwagger(app);
// ... continue with other middleware and routes
