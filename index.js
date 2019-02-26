// Code your solution here
const findMatching = (drivers, str) => {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

const fuzzyMatch = (drivers, str) => {
    return drivers.filter(driver => {
        if(driver.charAt(driver.length-1)=== str || (driver.slice(1, driver.length-1).includes(str))){
        }else{
            return driver.includes(str)
        }
    })
}

const matchName = (drivers, str) => {
    return drivers.filter(driver => driver.name === str)
}