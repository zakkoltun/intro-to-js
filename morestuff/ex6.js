function allMatches(words, exp) {
  let matches = words.filter(word => word.match(exp));
  console.log(matches);
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
