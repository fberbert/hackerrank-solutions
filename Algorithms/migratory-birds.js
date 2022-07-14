/*
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 */

const migratoryBirds = (arr) => 
    arr
      .sort() // lesser id comes first
      .join('') // converts array to string, e.g.: 11122333
      .match(/(([0-9])\2+)/g) // returns an array matching any sequence os 2 equal digits or more
      .sort((a, b) => b.length - a.length)[0] // sort the array by length
      .substring(0, 1) // got it

// console.log(migratoryBirds([8, 3, 1, 2, 1, 2, 3, 2, 2, 3, 4, 3, 3, 3]))
