const convertToCelsius = function(temp) {

  let result=parseFloat(((temp-32)*(5/9)).toFixed(1));

  return result;
};

const convertToFahrenheit = function(temp) {

  let result= parseFloat((temp*(9/5)+32).toFixed(1));

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
