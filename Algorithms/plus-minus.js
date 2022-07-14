/*
https://www.hackerrank.com/challenges/plus-minus/problem
*/

function plusMinus(arr) {
  // ratio of positive elements
  console.log((arr.filter(e => e > 0).length / arr.length).toFixed(6))
  // ratio of negative elements
  console.log((arr.filter(e => e < 0).length / arr.length).toFixed(6))
  // ratio of elements equals to zero
  console.log((arr.filter(e => e == 0).length / arr.length).toFixed(6))
}

plusMinus([ -4, 3, -9, 0, 4, 1 ])
