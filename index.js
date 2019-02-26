// Code your solution here
let findMatching = (drivers, person) => {
    let driverFilter = drivers.filter(name => name.toLowerCase() === person.toLowerCase())
    return driverFilter;
}

let fuzzyMatch = (drivers, person) => {
    let driverFilter = drivers.filter(name => name.charAt(0) === person.charAt(0));
    return driverFilter;
}

let matchName = (drivers, person) => {
    let driverFilter = drivers.filter(something => something.name === person);
    return driverFilter;
}