/*
https://www.hackerrank.com/challenges/binary-search-tree-1/problem
*/

SELECT 
  a.n, 
  CASE
    WHEN a.p IS NULL THEN 'Root'
    WHEN (SELECT COUNT(*) FROM bst AS b WHERE b.p=a.n) > 0 THEN 'Inner'
    WHEN (SELECT COUNT(*) FROM bst AS b WHERE b.p=a.n) = 0 THEN 'Leaf'
  END
FROM bst AS a
ORDER BY n
