-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
SELECT
  emp.name AS Employee
FROM
  Employee emp
  INNER JOIN Employee manager ON emp.managerId = manager.id
WHERE
  emp.salary > manager.salary;
