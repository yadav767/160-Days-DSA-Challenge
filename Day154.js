//Leetcode-Problem 2469: Convert the Temperature
let celsius = 36.5;

var convertTemperature = function (celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 9 / 5 + 32;
    return [kelvin, fahrenheit];
};
console.log(convertTemperature(celsius));