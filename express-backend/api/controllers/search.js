const { Sequelize } = require("sequelize");
const config = require("../../config/config");

const sequelize = new Sequelize(config.development);

const search = async (req, res) => {
  try {
    const { filters, sort, aggregate } = req.body;
    // Construct the base query
    let query = 'SELECT * FROM "SensorData"';

    if (filters) {
      const filterConditions = Object.keys(filters).map((column) => {
        const operator = Object.keys(filters[column])[0];
        const value = filters[column][operator];
        let sequelizeOperator = "";

        // map the operator to Sequelize's operator
        switch (operator) {
          case "gte":
            sequelizeOperator = ">=";
            break;
          case "lte":
            sequelizeOperator = "<=";
            break;

          default:
            sequelizeOperator = "=";
            break;
        }

        return `"${column}" ${sequelizeOperator} ${value}`;
      });
      query += ` WHERE ${filterConditions.join(" AND ")}`;
    }
    if (sort) {
      const { column, order } = sort;
      const sortOrder = order.toLowerCase() === "descending" ? "DESC" : "ASC";
      query += ` ORDER BY "${column}" ${sortOrder}`;
    }
    if (aggregate) {
      const { column, operator } = aggregate;
      query = `SELECT ${operator}("${column}") FROM (${query}) AS subquery`;
    }

    // execute the query
    const results = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT,
      logging: false,
    });

    res.status(200).json(results);
  } catch (error) {
    // console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = search;
