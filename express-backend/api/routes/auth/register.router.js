const express = require("express");
const { body } = require("express-validator");
const register = require("../../controllers/register");

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with an email and password
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request, validation errors
 *       '500':
 *         description: Internal server error
 */

const registerRouter = express.Router();
registerRouter.post(
  "/api/register",
  [
    // Used express-validator middleware for validation
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("Password must be at least 3 characters long"),
  ],
  // eslint-disable-next-line comma-dangle
  register
);

module.exports = registerRouter;
