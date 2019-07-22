// Code your solution here
const findMatch = (drivers, string) => {
  const sameName = drivers.filter(driver => {
    if (driver.name === string) {
      return driver.name;
    }
  })
  return sameName;
}
