const input = require("./input").module.sort((a, b) => a - b);

let currAdapterJolt = 0;
let jolt1diff = 0;
let jolt3diff = 0;
//! Part 1
for (let idx = 0; idx < input.length; idx++) {
  const adapter = input[idx];
  const currJoltDiff = adapter - currAdapterJolt;
  currAdapterJolt = adapter;
  if (currJoltDiff === 1) jolt1diff++;
  else if (currJoltDiff === 3) jolt3diff++;
}
const device = jolt1diff * ++jolt3diff;
console.log("Part 1:", device);
//! Part 2

currAdapterJolt = 0;
jolt1diff = 0;
jolt3diff = 0;
let combinations = 1;
for (let idx = 0; idx < input.length; idx++) {
  const adapter = input[idx];
  const currJoltDiff = adapter - currAdapterJolt;
  currAdapterJolt = adapter;
  if (currJoltDiff < 3) combinations *= 3 - currJoltDiff;
}

console.log(combinations);