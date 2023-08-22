const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");

const config = require("../../config/config");

const sequelize = new Sequelize(config.development);
const User = require("../models/users")(sequelize, DataTypes);

/* eslint-disable consistent-return */
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email }, logging: false });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // Set the token as a cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
        sameSite: "lax", // Adjust as needed
      });
      return res.status(200).send("Login successful");
    }
    return res.status(401).send("Unauthorized");
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = login;
