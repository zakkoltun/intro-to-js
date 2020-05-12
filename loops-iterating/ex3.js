let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The condition in the while loop is an assignment (counter = 1) not a comparison. Each time the while loop starts over, counter will be set to 1 and will never break since that evaluates to true.
