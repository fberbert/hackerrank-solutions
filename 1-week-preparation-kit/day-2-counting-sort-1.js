/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem
 */

const countingSort = (arr) => {
  const freq = new Array(100).fill(0)
  arr.forEach(e => {
    freq[e]++
  })
  return freq
}
