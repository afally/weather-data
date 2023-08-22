const express = require("express");
const multer = require("multer");
const uploader = require("../../controllers/upload");
const authenticateUser = require("../../middleware/authenticateUser");

/**
 * @swagger
 * /api/sensors/upload:
 *   post:
 *     summary: Upload sensor data CSV file
 *     description: Upload a CSV file containing sensor data
 *     tags:
 *       - Sensors
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               csvFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: File uploaded successfully
 *       '400':
 *         description: Bad request, no CSV file uploaded
 *       '500':
 *         description: Internal server error
 */

const uploadRouter = express.Router();
const upload = multer({ dest: "uploads/" });

uploadRouter.post(
  "/api/sensors/upload",
  authenticateUser,
  upload.single("csvFile"),
  // eslint-disable-next-line comma-dangle
  uploader
);

module.exports = uploadRouter;
