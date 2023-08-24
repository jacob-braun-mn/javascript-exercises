const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(value => sum += value);
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(value => product *= value);
  return product
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let prod = 1;
  while (a > 0) {
    prod *= a;
    a -= 1;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
