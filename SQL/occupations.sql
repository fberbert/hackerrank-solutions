/*
https://www.hackerrank.com/challenges/occupations/problem
*/

SELECT 
  MIN(CASE WHEN occupation = 'Doctor' THEN name ELSE NULL END) AS Doctor,
  MIN(CASE WHEN occupation = 'Professor' THEN name ELSE NULL END) AS Professor,
  MIN(CASE WHEN occupation = 'Singer' THEN name ELSE NULL END) AS Singer,
  MIN(CASE WHEN occupation = 'Actor' THEN name ELSE NULL END) AS Actor
FROM (
  SELECT
    a.occupation,
    a.name,
    (
      SELECT COUNT(*) 
      FROM occupations AS b
      WHERE
        a.occupation = b.occupation
        AND a.name > b.name
    ) ranking
  FROM occupations AS a
  ORDER BY a.name
) AS c
GROUP BY c.ranking
