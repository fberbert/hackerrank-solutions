/*
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

function miniMaxSum(arr) {
  // miniSum is initialized with max sum
  let miniSum = Number.MAX_SAFE_INTEGER
  let maxSum  = Number.MIN_SAFE_INTEGER

  arr.forEach((_,i) => {
    // sum of arr elements except the current i (indice)
    const currentSum = arr.filter((_, ind) => ind != i).reduce((acc, cur) => acc + cur, 0)

    if ( currentSum < miniSum ) miniSum = currentSum
    if ( currentSum > maxSum ) maxSum = currentSum
  })
  console.log(miniSum, maxSum)
}
