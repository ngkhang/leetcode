-- https://leetcode.com/problems/swap-salary/
UPDATE
  Salary
SET
  sex = IF(sex = 'f', 'm', 'f');
