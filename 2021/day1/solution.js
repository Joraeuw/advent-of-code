const input = require("./input").module;

let result = 0;

for (let index = 2; index < input.length - 1; index++) {
  if (input[index + 1] > input[index - 2]) result++;
}

console.log(result);
