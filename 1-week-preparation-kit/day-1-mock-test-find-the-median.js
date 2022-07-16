const findMedian = (arr) => {
  const s = [...arr].sort()
  const mid = Math.floor(s.length/2)
  return ( s.length % 2 === 0 ) 
    ? s[mid -1] + s[mid] / 2
    : s[mid]
}
