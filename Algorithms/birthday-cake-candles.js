/*
* https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

function birthdayCakeCandles(candles) {
  // Math.max(...candles) return the max height in the array
  // candles.filter to return all elements equals to max number above
  // the length of filtered array is the quantity os candles expected
  const maxHeight = Math.max(...candles)
  return candles.filter(e => e === maxHeight).length
}

birthdayCakeCandles([3, 2, 1, 3, 3])
