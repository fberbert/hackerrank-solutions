/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
 */

const lonelyinteger = (a) => 
  (
    a.filter((e, i, arr) => {
    let unique = true
    arr.forEach((x, z) => {
      if ( x === e && i != z ) unique = false
    })
    return unique
  }) || []
  )[0]

