let array1 = [1, 2, undefined, 4];
// length = 4

let array2 = [1];
array2.length = 5;
// length = 5;

let array3 = [];
array3[-1] = [1];
// length = 0, since negative numbers aren't true elements

let array4 = [1, 2, 3, 4, 5];
array.length = 3;
// length = 3, since the array will be truncated

let array5 = [];
array5[100] = 3;
// length = 101
