let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// prints 1. the shadow variable inside foo() is limited to the scope of the function.
