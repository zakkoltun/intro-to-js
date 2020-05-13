let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

function copyObj(obj, keys) {
  if (!keys) {
    // copy all keys
    return Object.create(obj);
  } else {
    let newObj = {};
    keys.forEach(key => newObj[key] = obj[key]);
    return newObj;
  }
}
