// Code your solution here
function findMatching (drivers, name) {
    return drivers.filter (driver =>
        driver.toLowerCase() === name.toLowerCase()
        );
}

const drivers = [
    'Bobby','Sammy','Sally','Annette','Sarah','Bobby'
]

function fuzzyMatch (drivers, letters) {
    return drivers.filter( driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
    );
}

const driverObjects =[
    {name: 'Bobby', hometown: 'Pittsburgh'},
    {name: 'Sammy', hometown: 'New York'},
    {name: 'Sally', hometown: 'Cleveland'},
    {name: 'Annette', hometown: 'Los Angeles'},
    {name: 'Bobby', hometown: 'Tampa Bay'},
]

function matchName (driverObjects, name) {
    return driverObjects.filter(driver =>
        driver.name.toLowerCase () === name.toLowerCase ()
        );
}