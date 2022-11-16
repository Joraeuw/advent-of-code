const input = require("./input").module;
let reg = /(\d+)-(\d+) ([a-z]): (\w+)/;
let valids = 0;

const within = (min, max, val) => val >= min && val <= max;

//! Part 1
for (let i = 0; i < input.length; i++) {
  let count = 0;
  let [_, min, max, char, text] = reg.exec(input[i]);
  for (let idx = 0; idx < text.length; idx++) {
    const e = text[idx];
    if (e == char) count++;
    if (count > max) break;
  }
  if (within(min, max, count)) valids++;
}

console.log("Part 1", valids);

//! Part 2
valids = 0;
for (let i = 0; i < input.length; i++) {
  let [_, idx1, idx2, char, text] = reg.exec(input[i]);
  let cond1 = text[idx1 - 1] == char;
  let cond2 = text[idx2 - 1] == char;
  if (cond1 ? !cond2 : cond2) valids++;
}

console.log("Part 2", valids);
