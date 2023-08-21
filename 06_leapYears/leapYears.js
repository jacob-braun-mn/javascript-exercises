const leapYears = function(year) {
    if (Number.isInteger(year/100)) {
        return Number.isInteger(year/400)
    } else {
        return Number.isInteger(year/4)
    }
};

// Do not edit below this line
module.exports = leapYears;
