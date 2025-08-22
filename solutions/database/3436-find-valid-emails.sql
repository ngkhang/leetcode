-- https://leetcode.com/problems/find-valid-emails/description/
SELECT
  *
FROM
  Users
WHERE
  email REGEXP '^[a-zA-Z0-9\_]+\@[a-zA-Z]+\\.com$';
