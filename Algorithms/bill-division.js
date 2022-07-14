/*
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 */

const bonAppetit = (bill, k, b) => {
  // bill: array representing the cost of each item
  // k: index of the item anna doesn't eat
  // b: the amount of money Anna contributed

  const splitBill = bill
    .filter((e, i) => i != k) // bill except k item
    .reduce((acc, cur) => acc + cur, 0) / 2
    // sum of items divided by 2

  console.log( 
    ( splitBill === b )
      ? 'Bon Appetit'
      : b - splitBill 
  )
}

// bonAppetit([ 3, 10, 2, 9 ], 1, 12)
