/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
 */
const miniMaxSum = (arr) => {
  let minSum = Number.MAX_SAFE_INTEGER
  let maxSum = Number.MIN_SAFE_INTEGER

  arr.forEach((element, ind, array) => {
    const sum = array.filter((e, i) => i != ind).reduce((acc, cur) => acc + cur, 0)
    if ( sum < minSum ) minSum = sum
    if ( sum > maxSum ) maxSum = sum
  })
  console.log(minSum, maxSum)
}
