for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// No error. The third part of the for loop is blank so i is unaffected by it, but i is still incremented within the loop.
