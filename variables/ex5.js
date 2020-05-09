let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// Will print 'bar'. The line inside the block creates a new variable called foo that is specific to that block's scope; it hides the global foo inside the block but disappears once the block is done.
