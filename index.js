const cTable = require("console.table")
const inquirer = require("inquirer")
//const { handlers } = require("./lib/handlers")
const mysql = require("mysql2")


const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "<Please use your mysql password and connection>",
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
initializeApp()
})
}

function viewRoles(){
  db.query("SELECT role.id, title, salary, name as Department FROM role left join department on role.department_id=department.id", (err, results)=>{
  if(err) throw err;
  console.table(results)
  initializeApp()
  })
  }

  function viewEmployees(){
    db.query("SELECT employee.id, employee.first_name, employee.last_name, title, Concat(a.first_name,' ', a.last_name) as Manager FROM employee left join role on employee.role_id=role.id left join employee a on a.manager_id=employee.id", (err, results)=>{
    if(err) throw err;
    console.table(results)
    initializeApp()
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




