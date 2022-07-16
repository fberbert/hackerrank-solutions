/*
https://www.hackerrank.com/challenges/weather-observation-station-4/problem
*/

SELECT
  (SELECT COUNT(city) FROM station) -
  (SELECT COUNT(DISTINCT city) FROM station)
