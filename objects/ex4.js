let obj = {
  b: 2,
  a: 1,
  c: 3
};

let newArr = [];

Object.keys(obj).forEach(key => newArr.push(key.toUpperCase()));
console.log(newArr);
