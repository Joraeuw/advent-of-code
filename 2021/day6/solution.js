const input = require("./input").module;
let fishes = input.split(/,/).map(Number);

let map = [];

let found = false;
for (const fish of fishes) {
  for (const data of map) {
    if (data[0] === fish) {
      data[1]++;
      found = true;
    }
  }
  if (!found) map.push([fish, 1]);
  found = false;
}

for (let index = 1; index <= 256; index++) {
  //console.log("day " + index);
  let removalCount = 0;
  map = map.map(([fish, count]) => [--fish, count]);

  for (const data of map) {
    if (data[0] < 0) {
      map = map.filter((x) => x !== data);
      removalCount += data[1];
      break;
    }
  }
  if (removalCount > 0) {
    let foundIndex = -1;
    let found8 = false;
    let found6 = false;
    for (const data of map) {
      foundIndex++;
      if (data[0] === 8) {
        map[foundIndex][1] += removalCount;
        found8 = true;
      }
      if (data[0] === 6) {
        map[foundIndex][1] += removalCount;
        found6 = true;
      }
    }
    if (!found8) map.push([8, removalCount]);

    if (!found6) map.push([6, removalCount]);
  }
}

let sum = 0;

for (const data of map) {
  sum += data[1];
}

console.log(sum);
