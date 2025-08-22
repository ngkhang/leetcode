-- https://leetcode.com/problems/not-boring-movies/
SELECT
  *
FROM
  Cinema
WHERE
  Cinema.id % 2 = 1
  AND Cinema.description <> 'boring'
ORDER BY
  Cinema.rating DESC;
