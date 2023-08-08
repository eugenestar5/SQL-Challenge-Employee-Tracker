const cTable = require("console.table")
const inquirer = require("inquirer")
//const { handlers } = require("./lib/handlers")
const mysql = require("mysql2")


const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "<Please put your database password here>",
    database: "nodejs_employeeTracker",
  },
  console.log("Connected nodejs_employeeTracker_database")
)


db.connect(function(error){
if(error) throw error;
console.log("Connected");

initializeApp()
})

const openingChoices = [
  "ExitTheApp",
  "View all roles",
  // "Add a role",
  // "Update a role salary",
  // "Delete a role",

  "View all departments",
  // "Add a department",
  // "Delete a department",

  "View all employees"
  // "Add an employee",
  // "Update an employee's information",
  // "Delete an employee",
]

function viewDeparments(){
db.query("SELECT * FROM department", (err, results)=>{
if(err) throw err;
console.table(results)
})
}

function viewRoles(){
  db.query("SELECT * FROM role", (err, results)=>{
  if(err) throw err;
  console.table(results)
  })
  }

  function viewEmployees(){
    db.query("SELECT * FROM employee", (err, results)=>{
    if(err) throw err;
    console.table(results)
    })
    }

const initializeApp = async () => {
  
  const answers = await inquirer.prompt([{
    type: "list",
    name: "opening",
    message: "What would you like to do?",
    choices: openingChoices,
    //pageSize: 5,
  }])
  console.log(answers)
 switch (answers.opening) {
    case openingChoices[0]:
      console.log("Invalid Choice!")
      return handlers.end()

    case openingChoices[1]:
      viewRoles();
      break

    // case openingChoices[2]:
    //   await handlers.add.role()
    //   break

    // case openingChoices[3]:
    //   await handlers.update.role()
    //   break

    // case openingChoices[4]:
    //   await handlers.delete.role()
    //   break

    case openingChoices[2]:
      viewDeparments()
      break

    // case openingChoices[6]:
    //   await handlers.add.department()
    //   break

    // case openingChoices[7]:
    //   await handlers.delete.department()
    //   break

    case openingChoices[3]:
      viewEmployees()
      break

    // case openingChoices[9]:
    //   await handlers.add.employee()
    //   break 

    // case openingChoices[10]:
    //   await handlers.update.employee()
    //   break 

    // case openingChoices[11]:
    //   await handlers.delete.employee()
    //   break
  }

  //return initializeApp()
}




