/*
https://www.hackerrank.com/challenges/full-score/problem
*/

SELECT
  hacker_id,
  name
FROM (
  SELECT
    h.hacker_id AS hacker_id,
    h.name AS name,
    COUNT(s.submission_id) AS total_max_scores
  FROM Hackers AS h
  INNER JOIN Challenges AS c
  INNER JOIN Difficulty AS d
  INNER JOIN Submissions AS s
  ON 
    s.hacker_id = h.hacker_id
    AND s.challenge_id = c.challenge_id
    AND c.difficulty_level = d.difficulty_level
  WHERE
    s.score = d.score
  GROUP BY h.hacker_id, h.name
) hacker_report
WHERE total_max_scores > 1
ORDER BY total_max_scores DESC, hacker_id
