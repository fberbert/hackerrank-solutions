/*
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */

const sockMerchant = (n, arr) => ( arr.sort().join().match(/\b([0-9]+),?\b\1\b/g) || [] ).length
