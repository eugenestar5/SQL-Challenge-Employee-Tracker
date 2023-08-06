module.exports = {
  department: answers => `
      DELETE FROM 
      IT_department 
      WHERE 
        id = ${answers.department.match(/[0-9]+/)}
    `,

  role: answers => `
      DELETE FROM 
        Roles 
      WHERE 
        id = ${answers.role.match(/[0-9]+/)}
    `,

  employee: answers => `
      DELETE FROM 
        Employees 
      WHERE 
        id = ${answers.employee.match(/[0-9]+/)}
    `,
}
