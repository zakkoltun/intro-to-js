function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let temp = 1;

for (let factorial = 1; factorial < 6; factorial++) {
  temp = times(temp, factorial);
}

