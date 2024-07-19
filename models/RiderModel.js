// userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Riders = sequelize.define("Riders", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
(async () => {
  try {
    await Riders.sync({});
    console.log("Riders model synced with database");
  } catch (error) {
    console.error("Error syncing Riders model:", error);
  }
})();

module.exports = {
  Riders,
};
