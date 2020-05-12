function capLongStrings(phrase) {
  if (phrase.length > 10) {
    return phrase.toUpperCase();
  } else {
    return phrase;
  }
}

console.log(capLongStrings('hello world'));
console.log(capLongStrings('goodbye'));
