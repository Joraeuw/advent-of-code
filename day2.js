let input = require("./input").module.inputText;

let depth = 0;
let horizontal = 0;
let aim = 0;

for (let index = 0; index < input.length; index++) {
  const [direction, valueStr] = input[index].split(" ");
  const value = parseInt(valueStr);
  if (direction == "up") aim -= value;
  else if (direction == "forward") {
    horizontal += value;
    depth += value * aim;
  } else if (direction == "down") aim += value;
}

console.log(depth * horizontal);
