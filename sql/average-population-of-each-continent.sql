/*
* https://www.hackerrank.com/challenges/average-population-of-each-continent/
*/

SELECT
  COUNTRY.Continent,
  FLOOR(
      SUM(CITY.Population) / COUNT(CITY.id)
  ) AS average
FROM COUNTRY
INNER JOIN CITY
    ON CITY.Countrycode=COUNTRY.Code
GROUP BY COUNTRY.Continent
