/*
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem
 */

const timeConversion = (s) => 
  s.replace(/^([0-9]{2}):([0-9]{2}):([0-9]{2})([A-Z]{2})$/, (_, hh, mm, ss, daypart) => {
    if ( daypart === 'PM' && hh != '12' ) hh = parseInt(hh, 10) + 12
    if ( daypart === 'AM' && hh === '12' ) hh = '00'
    return `${hh}:${mm}:${ss}`
  })
