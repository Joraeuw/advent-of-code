const input = require("./input").module;

const positions = input.split(",").map(Number);

let map = [];
let found = true;
let low = Math.min(...positions);
let high = Math.max(...positions);

for (const crabPos of positions) {
  for (const data of map) {
    if (data[0] === crabPos) {
      data[1]++;
      found = true;
    }
  }
  if (!found) map.push([crabPos, 1]);
  found = false;
}

let lowestFuel = Infinity;

for (let pos = low; pos <= high; pos++) {
  let current = 0;
  for (const data of map) {
    if (data[0] > pos)
      current += (data[1] * (data[0] - pos) * (data[0] - pos + 1)) / 2;
    else current += (data[1] * (pos - data[0]) * (pos - data[0] + 1)) / 2;
  }
  if (current < lowestFuel) lowestFuel = current;
}

console.log(lowestFuel);
