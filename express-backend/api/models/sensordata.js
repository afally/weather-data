// models/sensordata.js

module.exports = (sequelize, DataTypes) => {
  const SensorData = sequelize.define("SensorData", {
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rainfall: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wind_speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    visibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return SensorData;
};
