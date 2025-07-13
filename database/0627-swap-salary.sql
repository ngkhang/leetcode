-- https://leetcode.com/problems/swap-salary/

UPDATE salary
SET
    salary.sex = IF(salary.sex = 'f', 'm', 'f');
