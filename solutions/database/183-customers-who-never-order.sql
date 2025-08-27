-- https://leetcode.com/problems/customers-who-never-order/
-- Solution 1:
SELECT
  Customers.name AS Customers
FROM
  Customers
  LEFT JOIN Orders ON Customers.id = Orders.customerId
WHERE
  Orders.customerId IS NULL;

-- Solution 2:
SELECT
  Customers.name AS Customers
FROM
  Customers
WHERE
  Customers.id NOT IN (
    SELECT
      Orders.customerId
    FROM
      Orders
  );
