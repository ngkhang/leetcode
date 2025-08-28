-- https://leetcode.com/problems/delete-duplicate-emails/
-- Solution 1: Single-table Delete
DELETE FROM Person
WHERE
  id IN (
    SELECT
      *
    FROM
      (
        SELECT
          P1.id
        FROM
          Person P1
        WHERE
          EXISTS (
            SELECT
              id
            FROM
              Person P2
            WHERE
              P2.email = P1.email
              AND P2.id < P1.id
          )
      ) AS Temp_Person
  );

-- Solution 2: Multi-table DELETE
DELETE P1
FROM
  Person P1
  INNER JOIN Person P2 ON P1.email = P2.email
WHERE
  P1.id > P2.id;
