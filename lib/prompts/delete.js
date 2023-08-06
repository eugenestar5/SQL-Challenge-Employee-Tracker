module.exports = {
  department: departmentData => {
    return [
      {
        type: "list",
        name: "department",
        message: "Which department would you like to delete?",
        choices: departmentData.map(
          department => `${department.id} ${department.name}`
        ),
      },
      {
        type: "confirm",
        name: "confirmDelete",
        message:
          "Are you sure you would like to delete this department? It will delete all related Roles and Employees",
        default: false,
      },
    ]
  },
  role: roleData => {
    return [
      {
        type: "list",
        name: "role",
        message: "What role would you like to delete?",
        choices: roleData.map(role => `${role.id} ${role.title}`),
      },
      {
        type: "confirm",
        name: "confirmDelete",
        message:
          "Are you sure you would like to delete this role? It will delete all related Employees.",
        default: false,
      },
    ]
  },
  employee: employeeData => {
    return [
      {
        type: "list",
        name: "employee",
        message: "What employee would you like to delete?",
        choices: employeeData.map(
          employee =>
            `${employee.id} ${employee.first_name} ${employee.last_name}`
        ),
      },
      {
        type: "confirm",
        name: "confirmDelete",
        message:
          "Are you sure you would like to delete this employee?",
        default: false,
      },
    ]
  },
}
