function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('my name is Zak'));

// it splits up a sentence into an array of individual words, reverses the order of the array, then returns a new array containing the length of each word (in reverse order of the original phrase)
