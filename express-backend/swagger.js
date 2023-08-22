const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather Data API Documentation",
      version: "1.0.0",
      description: "API documentation for weather data",
    },
    components: {
      schemas: {
        WeatherData: {
          type: "object",
          properties: {
            id: { type: "integer" },
            temperature: { type: "number" },
            humidity: { type: "number" },
            windSpeed: { type: "number" },
            visibility: { type: "string" },
          },
        },
      },
    },
  },
  apis: [
    "./api/routes/auth/login.router.js",
    "./api/routes/auth/register.router.js",
    "./api/routes/sensor/search.router.js",
    "./api/routes/sensor/upload.router.js",
  ],
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
