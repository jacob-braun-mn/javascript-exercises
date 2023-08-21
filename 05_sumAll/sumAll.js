const sumAll = function(int1, int2) {
    let total = 0
    let arr = [int1, int2]
    arr.sort(function (a, b) {return a - b})

    if (int1 < 0 | int2 < 0 | Number.isInteger(int1) === false | Number.isInteger(int2) === false) {
        total = "ERROR"
    } else {
        for (i=arr[0]; i < arr[1] + 1; i++) {
            total += i
        }
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
