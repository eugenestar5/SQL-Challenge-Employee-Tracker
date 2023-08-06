const cTable = require("console.table")
const inquirer = require("inquirer")
const { handlers } = require("./lib")

const initializeApp = async () => {
  const openingChoices = [
    "ExitTheApp",
    "View all roles",
    "Add a role",
    "Update a role salary",
    "Delete a role",

    "View all departments",
    "Add a department",
    "Delete a department",

    "View all employees",
    "Add an employee",
    "Update an employee's information",
    "Delete an employee",
  ]
  const answers = await inquirer.prompt({
    type: "list",
    name: "opening",
    message: "What would you like to do?",
    choices: openingChoices,
    pageSize: 5,
  })
  switch (answers.opening) {
    case openingChoices[0]:
      console.log("Invalid Choice!")
      return handlers.end()

    case openingChoices[1]:
      await handlers.view.roles()
      break

    case openingChoices[2]:
      await handlers.add.role()
      break

    case openingChoices[3]:
      await handlers.update.role()
      break

    case openingChoices[4]:
      await handlers.delete.role()
      break

    case openingChoices[5]:
      await handlers.view.departments()
      break

    case openingChoices[6]:
      await handlers.add.department()
      break

    case openingChoices[7]:
      await handlers.delete.department()
      break

    case openingChoices[8]:
      await handlers.view.employees()
      break

    case openingChoices[9]:
      await handlers.add.employee()
      break 

    case openingChoices[10]:
      await handlers.update.employee()
      break 

    case openingChoices[11]:
      await handlers.delete.employee()
      break
  }

  return initializeApp()
}

initializeApp()
