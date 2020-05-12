function oddLengths(arr) {
  return arr.reduce((accumulator, string) => {
    if (string.length % 2 !== 0) {
      return accumulator.concat([string.length]);
    } else {
      return accumulator;
    }
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
