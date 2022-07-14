/*
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

const breakingRecords = (scores) => {
  // first game determines the min and max scores at start of season
  let curMinimum = scores[0]
  let curMaximum = scores[0]
  let breakArr = [0, 0]
  scores.shift() // remove first game

  scores.forEach(score => {
    if ( score < curMinimum ) {
      curMinimum = score
      breakArr[1]++
    }

    if ( score > curMaximum ) {
      curMaximum = score
      breakArr[0]++
    }
  })
  return breakArr
}

// console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))
