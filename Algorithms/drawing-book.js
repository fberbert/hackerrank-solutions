/*
 * https://www.hackerrank.com/challenges/drawing-book/problem
 */

const pageCount = (n, p) => 
  ( n % 2 === 0 && p === n - 1 && p > 1 )
    ? 1
    : parseInt(Math.min( p / 2, n / 2 - p / 2), 10)

