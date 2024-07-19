// userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const TotalOrder = sequelize.define("TotalOrder", {
  Location: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  OrderStatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Rider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RiderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Sync the model with the database
(async () => {
  try {
    await TotalOrder.sync({});
    console.log("TotalOrder model synced with database");
  } catch (error) {
    console.error("Error syncing TotalOrder model:", error);
  }
})();




module.exports = {
  TotalOrder
};
