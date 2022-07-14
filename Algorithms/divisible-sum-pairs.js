/*
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */

const divisibleSumPairs = (_, k, ar) => {
  let meet = 0
  for (let i=0; i<ar.length; i++) 
    for (let j=i+1; j<ar.length; j++) {
      if ( (ar[i] + ar[j]) % k === 0 ) meet++
    }
  return meet
}
