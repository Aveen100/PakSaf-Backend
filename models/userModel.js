// userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("User", {
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Balance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Sync the model with the database
(async () => {
  try {
    await User.sync({});
    console.log("User model synced with database");
  } catch (error) {
    console.error("Error syncing User model:", error);
  }
})();

async function findUserByUsernameOrEmail(username, email) {
  // Query the database to find a user with the provided username or email
  const user = await User.findAll({
    where: {
      Username: username,
      Email: email,
    },
  });
  return user;
}

// Function to create a new user
async function createUser(userData) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
}


// Function to get a user by email and password
async function getUserByEmail(email, password) {
  try {
    const user = await User.findOne({
      where: { Email: email, Password: password },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserByEmail,
  findUserByUsernameOrEmail,
  User,
};
