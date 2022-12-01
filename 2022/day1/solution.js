const input = require("./input").module;
const target = 2020;
const map = {};

//! Part 1
let max = -Infinity;
for (let idx = 0; idx < input.length; idx++) {
  let currSum = 0;
  for (const el of input[idx]) {
    currSum += el;
  }
  if (max < currSum) max = currSum;
}

console.log("Part 1:", max);
//! Part 2
max = [-Infinity, -Infinity, -Infinity];
let curMinIdx = 0;
for (let idx = 0; idx < input.length; idx++) {
  let currSum = 0;
  for (const el of input[idx]) {
    currSum += el;
  }
  // for (let selMax = 0; selMax < max.length; selMax++) {
  // if(max[selMax])
  // }
  if (max[curMinIdx] < currSum) {
    max[curMinIdx] = currSum;
    let min = Infinity;
    for (let minEl = 0; minEl < max.length; minEl++)
      if (min > max[minEl]) {
        curMinIdx = minEl;
        min = max[minEl];
      }
  }
}
console.log("Part 2:", max[0] + max[1] + max[2]);
