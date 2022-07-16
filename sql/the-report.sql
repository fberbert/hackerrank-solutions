/* 
  https://www.hackerrank.com/challenges/the-report/problem 
*/

SELECT
  CASE
    WHEN g.Grade >= 8
      THEN s.Name
    ELSE Null
    END,
  g.Grade,
  s.Marks
FROM
  Students AS s
INNER JOIN Grades AS g
ON (
  s.Marks >= g.Min_Mark
  AND s.Marks <= g.Max_Mark
)
ORDER BY g.Grade DESC, s.Name
