/*
* https://www.hackerrank.com/challenges/challenges/problem
*/

SELECT
    c.hacker_id, h.name,
    count(c.hacker_id) AS challenges_created
FROM Hackers AS h
INNER JOIN Challenges AS c
    ON h.hacker_id=c.hacker_id
GROUP BY c.hacker_id, h.name
HAVING
    challenges_created=(
            SELECT 
                COUNT(hacker_id) AS cnt
            FROM Challenges
            GROUP BY hacker_id
            ORDER BY cnt DESC
            LIMIT 1
    )
    OR challenges_created IN (
      SELECT cfiltered.number
        FROM (
          SELECT 
            counters.cnt AS number,
            COUNT(counters.cnt) AS ctotal 
            FROM (
              SELECT 
                COUNT(hacker_id) AS cnt
              FROM Challenges
              GROUP BY hacker_id
            ) counters
        GROUP BY counters.cnt) cfiltered
        WHERE cfiltered.ctotal=1
        ORDER BY cfiltered.number DESC
    ) 
ORDER BY challenges_created DESC, c.hacker_id
