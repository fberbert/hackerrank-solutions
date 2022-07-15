/*
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

const catAndMouse = (x, y, z) => 
  ( Math.abs(x - z) < Math.abs(y - z) ) 
    ? 'Cat A'
    : ( Math.abs(x - z) > Math.abs(y - z) )
      ? 'Cat B'
      : 'Mouse C'
