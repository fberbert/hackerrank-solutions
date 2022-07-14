/*
 * https://www.hackerrank.com/challenges/kangaroo/problem
 */

const kangaroo = (x1, v1, x2, v2) => {
  /*
   * x1 = starting point 1
   * v1 = jump distance 1
   * x2 = starting point 1
   * v2 = jump distance 1
  */
  // both arrays are = [position, distance]
  let slower = ( v1 <= v2 ) ? [x1, v1] : [x2, v2]
  let faster = ( v1 <= v2 ) ? [x2, v2] : [x1, v1]

  while ( faster[0] < slower[0] ) {
    faster[0] += faster[1]
    slower[0] += slower[1]

    if ( faster[0] === slower[0] ) return 'YES'
  }
  return 'NO'
}

// console.log(kangaroo(0,2,5,3))
