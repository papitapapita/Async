const sum = (num1, num2) => num1 + num2;
const rest = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(1, 2, sum));

setTimeout(sum, 5000, 1, 2);