/* 
 * https://www.hackerrank.com/challenges/staircase/problem?
 */

function staircase(n) {
  for (let i=1; i<=n; i++)
    console.log('#'.repeat(i).padStart(n, ' '))
}
