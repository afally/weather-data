const express = require("express");
const search = require("../../controllers/search");
const authenticateUser = require("../../middleware/authenticateUser");

/**
 * @swagger
 * /api/sensors/search:
 *   post:
 *     summary: Search sensor data
 *     description: Search sensor data based on filters, sorting, and aggregation
 *     tags:
 *       - Sensors
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filters:
 *                 type: object
 *                 properties:
 *                   temperature:
 *                     type: object
 *                     properties:
 *                       gte:
 *                         type: number
 *               sort:
 *                 type: object
 *                 properties:
 *                   column:
 *                     type: string
 *                   order:
 *                     type: string
 *                     enum: [ascending, descending]
 *               aggregate:
 *                 type: object
 *                 properties:
 *                   column:
 *                     type: string
 *                   operator:
 *                     type: string
 *             example:
 *               filters:
 *                 temperature:
 *                   gte: 20
 *               sort:
 *                 column: temperature
 *                 order: descending
 *               aggregate:
 *                 column: visibility
 *                 operator: COUNT
 *     responses:
 *       '200':
 *         description: Successfully retrieved sensor data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sensorData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       timestamp:
 *                         type: integer
 *                       temperature:
 *                         type: number
 *                       rainfall:
 *                         type: number
 *       '500':
 *         description: Internal server error
 */

const searchRouter = express.Router();
searchRouter.post("/api/sensors/search", authenticateUser, search);

module.exports = searchRouter;
