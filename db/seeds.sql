INSERT INTO department (id, department_name)
VALUES (001, IT)
       (002, HR)

INSERT INTO role (id, title, salary, department_id)
VALUES (001, 'manager', 350, oo1)
       (001, 'manager', 300, oo2)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (001, 'Steve', 'Smith', 002)
       (002, 'John', 'Doe', 001)