/*
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  // s = start point
  // t = end point
  // a = apple tree
  // b = orange tree

  console.log(
    apples.filter(apple => 
      ( (a + apple) >= s && (a + apple) <= t ) ? true : false
    ).length
  )

  console.log(
    oranges.filter(orange => 
      ( (b + orange) >= s && (b + orange) <= t ) ? true : false
    ).length
  )
}

// countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ])
