const convertToCelsius = function(temp) {
  if (Number.isNaN(temp)) {return "ERROR"}
  return Math.round((temp - 32) * 5 / 9 * 10)/10
};

const convertToFahrenheit = function(temp) {
  if (Number.isNaN(temp)) {return "ERROR"}
  return Math.round((temp * 9 / 5 + 32) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
