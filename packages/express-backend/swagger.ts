import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express, { Express } from "express";

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

const specs = swaggerJsdoc(options);

export default function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}

// Example usage:
// const app = express();
// setupSwagger(app);
// ... continue with other middleware and routes
