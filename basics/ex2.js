// Determine digits of 4936

let num = 4936;

let ones = num % 10;
num = (num - ones) / 10;
let tens = num % 10;
num = (num - tens) / 10;
let hundreds = num % 10;
num = (num - hundreds) / 10;
let thousands = num % 10;

console.log("thousands place is " + thousands);
console.log("hundreds place is " + hundreds);
console.log("tens place is " + tens);
console.log("ones place is " + ones);


// Function to get digits

function getDigits(num) {
  let digits = [];
  while (num > 0) {
    let digit = num % 10;
    digits.unshift(digit);
    num = (num - digit) / 10;
  }
  return digits;
}

console.log(getDigits(1234));
console.log(getDigits(6));
console.log(getDigits(959382934023984));
