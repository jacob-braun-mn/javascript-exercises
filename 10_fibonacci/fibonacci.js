const fibonacci = function(a) {
    a = Number(a);
    if (a < 0) {
        return "OOPS";
    };

    if (a === 1 | a === 2) {
        return 1;
    };

    let fib = [1, 1]
    for (i=2; i<a; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    };
    return fib[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
