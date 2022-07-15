/*
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */

const countingValleys = (steps, path) => {
  let sum = 0
  let count = 0

  path.split('').forEach(e => {
    if ( e === 'U') {
      if (++sum === 0) count++
    } else sum--
  })
  return count
}

// console.log(countingValleys(8, 'DDUUDDUDUUUD'))
