const findTheOldest = function(people) {
    let oldestName;
    let oldestAge = 0;
    people.forEach(function(person) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        };
        if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
            oldestName = person.name;
        };
    });
    return people.find(person => person.name === oldestName)
};

// Do not edit below this line
module.exports = findTheOldest;
