// config/db.js
const mysql = require("mysql");
const dbConfig = require("./config.js");

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// Test the MySQL connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Successfully connected to the database");
  connection.release();
});

module.exports = pool;
