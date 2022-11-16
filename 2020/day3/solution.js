const input = require("./input").module;

let right = 3;
let down = 1;
//! Part 1
let encounters = 0;

for (let rowIdx = down, colIdx = 0; rowIdx < input.length; rowIdx += down) {
  colIdx = (colIdx + right) % input[rowIdx].length;
  if (input[rowIdx][colIdx] == "#") encounters++;
}

console.log("Part 1:", encounters);

//! Part 2
right = [1, 3, 5, 7, 1];
down = [1, 1, 1, 1, 2];
encounters = [0, 0, 0, 0, 0];
for (let idx = 0; idx < right.length; idx++) {
  const currR = right[idx];
  const currD = down[idx];
  for (let rowIdx = currD, colIdx = 0; rowIdx < input.length; rowIdx += currD) {
    colIdx = (colIdx + currR) % input[rowIdx].length;
    if (input[rowIdx][colIdx] == "#") encounters[idx]++;
  }
}

console.log(
  "Part 2:",
  encounters.reduce((acc, el) => el * acc)
);
