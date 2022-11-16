const input = require("./input").module;

//! Part 1
let groupSums = 0;

for (const group of input) {
  let groupChoices = new Set();
  for (const person of group) {
    for (const question of person) {
      if (groupChoices.has(question)) continue;
      else groupChoices.add(question);
    }
  }
  groupSums += groupChoices.size;
}

console.log("Part 1:", groupSums);

//! Part 2
groupSums = 0;
for (const group of input) {
  let groupChoices = [];
  for (const person of group) {
    let personChoices = new Set();
    for (const question of person) {
      if (personChoices.has(question)) continue;
      else personChoices.add(question);
    }
    groupChoices.push(personChoices);
  }
  groupSums += groupChoices.reduce(
    (acc, prsn) => new Set([...acc].filter((i) => prsn.has(i)))
  ).size;
}

console.log("Part 2:", groupSums);
