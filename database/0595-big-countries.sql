-- https://leetcode.com/problems/big-countries/

SELECT
    name, population, area
FROM
    World
WHERE
    World.area >= 3000000
        OR World.population >= 25000000;
