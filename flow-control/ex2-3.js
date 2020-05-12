function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Not an int');
  }
}

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(12453);
evenOrOdd('hello');
evenOrOdd(3.14159);
