const mysql = require("mysql2")

require("dotenv").config()

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Eugene_Zane_Elijah_0919!!",
    database: "nodejs_employeeTracker",
  },
  console.log("Connected nodejs_employeeTracker_database")
)

module.exports = db
