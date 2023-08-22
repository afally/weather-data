// eslint-disable-next-line func-names
module.exports.up = async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("SensorData", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    timestamp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    temperature: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    rainfall: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wind_speed: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    visibility: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
};
// eslint-disable-next-line func-names
module.exports.down = async function (queryInterface) {
  await queryInterface.dropTable("SensorData");
};
