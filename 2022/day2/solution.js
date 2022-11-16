const input = require("./input").module;
let reg = /(\d+)-(\d+) ([a-z]): \w+/;
let result = 0;

//! Part 1
for (let i = 0; i < input.length; i++) {
  const [min, max, char, text] = reg.exec(input[i]);
  log(min, max, char, text);
}

//! Part 2
