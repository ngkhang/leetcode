-- https://leetcode.com/problems/duplicate-emails/
SELECT
  email AS Email
FROM
  Person
GROUP BY
  Email
HAVING
  COUNT(Email) > 1;
