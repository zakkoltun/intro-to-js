
function askName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);

  return name;
}

let firstName = askName('What is your first name? ');
let lastName = askName('What is your last name? ');


console.log(`Hello, ${firstName} ${lastName}!`);
