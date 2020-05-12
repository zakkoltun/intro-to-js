let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));

for (let years = 10; years < 50; years += 10) {
  console.log(`In ${ years } years, you will be ${ age + years } years old.`);
}
