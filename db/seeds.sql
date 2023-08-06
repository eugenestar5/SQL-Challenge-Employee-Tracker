INSERT INTO IT_department (Name)
VALUES 
("Systems"),
("Network"),
("Development");
("Project Team")

INSERT INTO Roles (Title, Salary, Department_ID)
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


INSERT INTO Employees (First_Name, Last_Name, Role_ID, Manager_ID, Is_Manager)
VALUES 
(1001,"Frank", "Roys", 1, NULL, 0),
(1002,"Robert", "Myers", 2, 1, 1),
(1003,"Francis", "Dane", 1, NULL, 0),
(1004,"Emmanuel", "Nko", 3, NULL, 0),
(1005,"Mary", "Jones", 3, NULL, 0),
(1006,"Joseph", "Roberts", 4, 2, 1),
(1007,"Cindy", "Buckets", 5, NULL, 0),
(1008,"Eugene", "Lights", 5, 3, 1),
(1009,"Elijah", "Shon", 5, NULL, 0),
(1010,"Kwame", "Ampadu", 6, NULL, 0),
(1011,"Joe", "Rockson", 6, NULL, 0),
(1012,"Daniel", "Toe", 7, NULL, 0),
(1013,"Bright", "Sandy", 8, 4, 1);
(1013,"Tarlor", "Bird", 9, NULL, 0);
(1013,"Shanon", "Grey", 9, NULL, 0);
(1013,"Shelby", "House", 10, NULL, 0);