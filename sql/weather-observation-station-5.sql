/*
https://www.hackerrank.com/challenges/weather-observation-station-5/problem
*/
(
  SELECT city, LENGTH(city) length
  FROM station
  ORDER BY length, city 
  LIMIT 1
)
UNION
(
  SELECT city, LENGTH(city) length
  FROM station
  ORDER BY length DESC, city
  LIMIT 1
)
