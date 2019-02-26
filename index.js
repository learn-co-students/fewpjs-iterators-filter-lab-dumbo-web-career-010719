// Code your solution here
const findMatching = (array, name) =>{
  return array.filter(result => {
    return result.toLowerCase() === name.toLowerCase()
  })
}


const fuzzyMatch = (array, name) => {
  return array.filter(result => {
    return result[0] == name[0]
  })
}

const matchName = (array, name) => {
  return array.filter(result => {
    return result.name === name
  })
}
