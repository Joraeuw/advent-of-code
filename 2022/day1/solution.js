const input = require("./input").module;
const target = 2020;
const map = {};

//! Part 1
for (let i = 0; i < input.length; i++) {
  if (map[target - input[i]] != map[map.length - 1]) {
    console.log(i, target, input[i]);
    console.log("Part 1:", input[map[target - input[i]]] * input[i]);
    break;
  }
  map[input[i]] = i;
}

//! Part 2
for (let j = 0; j < input.length - 2; j++) {
  const map1 = {};
  const curr_sum = target - input[j];
  for (let i = j + 1; i < input.length; i++) {
    if (map1[curr_sum - input[i]] != map1[map1.length - 1]) {
      console.log("Part 2:", input[j] * input[i] * (curr_sum - input[i]));
      return;
    }
    map1[input[i]] = i;
  }
}
