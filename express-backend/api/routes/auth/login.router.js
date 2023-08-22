const express = require("express");
const { body } = require("express-validator");
const login = require("../../controllers/login");

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     description: Log in a user with email and password
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
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Bad request, validation errors
 *       '401':
 *         description: Unauthorized, invalid credentials
 *       '500':
 *         description: Internal server error
 */

const loginRouter = express.Router();
loginRouter.post(
  "/api/login",

  body("email").isEmail().normalizeEmail(),
  body("password").notEmpty(),
  // eslint-disable-next-line comma-dangle
  login
);

module.exports = loginRouter;
