function askNumber(prompt) {
  let rlSync = require('readline-sync');

  return rlSync.question(prompt);
}

function multiply(num1, num2) {
  let product = num1 * num2;
  console.log(`${num1} * ${num2} = ${product}`);
}

let num1 = askNumber('Enter the first number: ');
let num2 = askNumber('Enter the second number: ');
multiply(num1, num2);
