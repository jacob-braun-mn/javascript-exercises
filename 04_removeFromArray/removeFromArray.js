const removeFromArray = function() {
    args = Array.from(arguments)
    arr = args.shift()
    for (arg of args) {
        const index = arr.indexOf(arg)
        if (index > -1) {
            arr.splice(index, 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
