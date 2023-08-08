INSERT INTO department (name)
VALUES 
("Systems"),
("Network"),
("Development"),
("Project Team");

INSERT INTO role (title, Salary, department_id)
VALUES 
("Network Engineer I", 130000, 2),
("Network Engineer II", 140000, 2),
("System Engineer I", 120000, 1),
("System Engineer II", 130000, 1),
("Software Developer", 150000, 3),
("Database Developer", 140000, 3),
("Database Administrator", 130000, 3),
("Project Manager", 120000, 4),
("Business Analyist", 90000, 4),
("Scrum Master", 80000, 4);


INSERT INTO employee (First_Name, Last_Name, Role_ID, Manager_ID, Is_Manager)
VALUES 
("Frank", "Roys", 1, NULL, 0),
("Robert", "Myers", 2, 1, 1),
("Francis", "Dane", 1, NULL, 0),
("Emmanuel", "Nko", 3, NULL, 0),
("Mary", "Jones", 3, NULL, 0),
("Joseph", "Roberts", 4, 2, 1),
("Cindy", "Buckets", 5, NULL, 0),
("Eugene", "Lights", 5, 3, 1),
("Elijah", "Shon", 5, NULL, 0);
