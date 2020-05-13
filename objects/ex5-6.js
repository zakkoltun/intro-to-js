let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

myObj.qux = 3;


// They will output different statements. Object.keys doesn't return prototype keys, while using a for..in loop will check all keys unless constrained by hasOwnProperty.
