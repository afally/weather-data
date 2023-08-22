const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { Sequelize, DataTypes } = require("sequelize");

const config = require("../../config/config");

const sequelize = new Sequelize(config.development);
const User = require("../models/users")(sequelize, DataTypes);

const register = async (req, res) => {
  const { email, password } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({
      where: { email },
      logging: false,
    });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates the user record in the database
    await User.create({ email, password: hashedPassword });

    return res.status(201).send("User registered successfully");
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = register;
