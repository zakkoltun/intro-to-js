function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

/*
i=1, factorial = 1 * 1 = 1
i=2, factorial = 1 * 2 = 2
i=3, factorial = 2 * 3 = 6
i=4, factorial = 6 * 4 = 24
i=5, factorial = 24 * 5 = 120
*/

console.log(`Factorial of 5: ${ factorial(5) }`);
console.log(`Factorial of 8: ${ factorial(8) }`);
