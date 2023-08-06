const mysql = require("mysql2")

require("dotenv").config()

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "nodejs_employeeTracker",
  },
  console.log("Connected nodejs_employeeTracker_database")
)

module.exports = db
