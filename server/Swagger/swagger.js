const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Repo Hub",
      version: "1.0.0",
      description: "API documentation for Repo-Hub",
    },
  },
  apis: ["../Routes"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
