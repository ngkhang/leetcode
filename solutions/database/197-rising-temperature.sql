-- https://leetcode.com/problems/rising-temperature/
SELECT
  w_previous.id AS id
FROM
  Weather w_point,
  Weather w_previous
WHERE
  DATE_ADD(w_point.recordDate, INTERVAL 1 DAY) = w_previous.recordDate
  AND w_point.temperature < w_previous.temperature;
