module.exports = {
  department: ({ name }) => `
      INSERT INTO 
      IT_department (name) 
      VALUES 
        ("${name}")
    `,

  role: ({ title, salary, department }) => `
      INSERT INTO 
        Roles (title, salary, department_id) 
      VALUES (
        "${title}"
        , ${salary}
        , ${department.match(/[0-9]+/)})
    `,

  employee: ({ firstName, lastName, manager, roleId, isManager }) => `
      INSERT INTO 
        Employees (first_name, last_name, manager_id, role_id, is_manager)
      VALUES (
        "${firstName}"
        , "${lastName}"
        , ${manager ? manager.match(/[0-9]+/) : null}
        , ${roleId.match(/[0-9]+/)}, ${isManager})
    `,
}
