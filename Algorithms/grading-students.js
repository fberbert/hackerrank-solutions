/*
 * https://www.hackerrank.com/challenges/grading/problem
 */

const gradingStudents = (grades) =>
  grades.map(grade => 
    ( 5 - ( grade % 5 )  < 3 && grade >= 38 )
      ? grade += 5 - ( grade % 5 )
      : grade
  )
