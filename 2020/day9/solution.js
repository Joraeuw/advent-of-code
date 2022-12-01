const input = require("./input").module;
const preamble = 25;
let invalid = 0;

//! Part 1
const isValid = (currIdx) => {
  const target = input[currIdx];
  const map = {};
  for (let idx = currIdx - preamble; idx < currIdx; idx++) {
    if (map[target - input[idx]] != map[input[currIdx - 1]]) return true;
    map[input[idx]] = idx;
  }
  return false;
};

for (let idx = preamble; idx < input.length; idx++) {
  const num = input[idx];
  if (!isValid(idx)) {
    console.log("Part 1:", num);
    invalid = num;
  }
}

//! Part 2
let sumRange = (left, right) => {
  let sum = 0;
  for (let idx = left; idx <= right; idx++) {
    sum += input[idx];
  }

  return sum;
};

let minmaxRange = (left, right) => {
  let max = -Infinity;
  let min = Infinity;
  for (let idx = left; idx <= right; idx++) {
    if (max < input[idx]) max = input[idx];
    if (min > input[idx]) min = input[idx];
  }

  return [min, max];
};
let left = 0,
  end = false;
right = input.length - 1;

for (let idx = 0; idx < input.length; idx++) {
  for (let idx2 = idx + 1; idx2 < input.length; idx2++) {
    const sum = sumRange(idx, idx2);
    if (sum === invalid) {
      left = idx;
      right = idx2;
      end = true;
      break;
    }
  }
  if (end) break;
}
let [min, max] = minmaxRange(left, right);
console.log("Part 2:", min + max);
