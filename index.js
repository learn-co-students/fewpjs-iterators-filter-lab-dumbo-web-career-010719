// Code your solution here
const findMatching = (drivers, string) => {
  let answer = drivers.filter( (driver) => {
    return driver.toLowerCase() === string.toLowerCase()
  })
  return answer
}

const fuzzyMatch = (arr, string) => {
  let lengthString = string.length
return answer = arr.filter( (ele) => {
  return ele.slice(0, lengthString) === string;
})
}

const matchName = (drivers, string) => {
  return answer = drivers.filter( (ele) => {
    return ele.name === string;
  })
}
