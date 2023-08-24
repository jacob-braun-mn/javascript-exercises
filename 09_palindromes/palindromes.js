const palindromes = function (input) {
    input = input.toLowerCase().replace(/(\s)|([^a-z0-9])/g, '');
    let arr = input.split('');
    let newString = arr.reverse().join('');
    return input === newString;
};

// Do not edit below this line
module.exports = palindromes;
