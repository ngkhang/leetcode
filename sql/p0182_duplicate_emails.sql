-- @link https://leetcode.com/problems/duplicate-emails/
-- Solution 1
SELECT
    P.email AS Email
FROM
    Person P
GROUP BY
    P.email
HAVING
    COUNT(P.email) > 1;

-- Solution 2
SELECT DISTINCT
    (P1.email)
FROM
    Person P1
    INNER JOIN Person P2 ON P1.email = P2.email
    AND P1.id <> P2.id;
