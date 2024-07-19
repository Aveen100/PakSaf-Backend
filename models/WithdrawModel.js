// userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Withdraw = sequelize.define("Withdraw", {
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
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Method: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Sync the model with the database
(async () => {
  try {
    await Withdraw.sync({});
    console.log("Withdraw model synced with database");
  } catch (error) {
    console.error("Error syncing Withdraw model:", error);
  }
})();

module.exports = {
  Withdraw,
};
