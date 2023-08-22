/* eslint-disable consistent-return, comma-dangle */
const { Readable } = require("stream");
const csvParser = require("csv-parser");
const fs = require("fs");
const { Sequelize, DataTypes } = require("sequelize");

const config = require("../../config/config");

const sequelize = new Sequelize(config.development);
const SensorData = require("../models/sensordata")(sequelize, DataTypes);

// eslint-disable-line consistent-return
const uploader = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No CSV file uploaded");
    }

    // Read the file contents into a buffer
    const fileBuffer = fs.readFileSync(req.file.path);

    const csvData = [];

    // Parse the file buffer using csv-parser
    const readableStream = new Readable();
    readableStream.push(fileBuffer);
    readableStream.push(null);

    readableStream
      .pipe(csvParser())
      .on("data", (data) => {
        csvData.push(data);
      })
      .on("error", (err) => {
        console.log("Error during parsing:", err);
      })
      .on("end", async () => {
        const userId = req.authenticatedUserId;

        try {
          // Insert CSV data into the SensorData table along with the userId
          await SensorData.bulkCreate(
            csvData.map((data) => ({
              timestamp: data.timestamp,
              temperature: data.temperature,
              rainfall: data.rainfall,
              humidity: data.humidity,
              wind_speed: data.wind_speed,
              visibility: data.visibility,
              userId,
            }))
          );

          return res.status(200).send("Data uploaded successfully");
        } catch (error) {
          // console.error(error);
          return res.status(500).send("Invalid CSV Format");
        } finally {
          // Delete the uploaded file even in case of error
          if (req.file && req.file.path) {
            fs.unlinkSync(req.file.path);
          }
        }
      });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = uploader;
