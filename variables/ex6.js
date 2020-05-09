const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// There will be no error, since FOO isn't being changed; a second variable is created inside the block which shadows the global FOO but disappears after the block finishes. 
