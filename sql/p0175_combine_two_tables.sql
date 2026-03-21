-- @link https://leetcode.com/problems/combine-two-tables/
-- Solution 1
SELECT
    P.firstName AS firstName,
    P.lastName AS lastName,
    A.city AS city,
    A.state AS state
FROM
    Person P
    LEFT JOIN Address A ON P.personId = A.personId;

-- Solution 2: USING()
-- SELECT
--     P.firstName AS firstName,
--     P.lastName AS lastName,
--     A.city AS city,
--     A.state AS state
-- FROM
--     Person P
--     LEFT JOIN Address A USING (personId);
