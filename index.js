function findMatching(driversArr, str) {
  let chosen = driversArr.filter( driver => driver.toLowerCase() === str.toLowerCase())
  return chosen
}

function fuzzyMatch(driArr, str) {
  let fuzz = driArr.filter( dri => dri.startsWith(str))
  return fuzz
}

function matchName(arr, str) {
  let match = arr.filter( dri => dri.name === str)
  return match
}
