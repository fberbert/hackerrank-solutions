/*
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 */

const getMoneySpent = (keyboards, drives, budget) => {
  let maxCost = -1
  keyboards.forEach(keyboard_price => {
    drives.forEach(drive_price => {
      const sum = keyboard_price + drive_price
      if ( sum <= budget && sum > maxCost ) maxCost = sum
    })
  })
  return maxCost
}
