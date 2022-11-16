const input = require("./input").module;

let [data, rules] = input.split("\n\n");

const pairs = rules.split("\n").reduce((acc, rule) => {
  const [left, right] = rule.split(" -> ");
  acc[left] = [left[0] + right, right + left[1]];
  return acc;
}, {});

let countPairs = {};
for (let i = 0; i < data.length - 1; i++) {
  countPairs[data.slice(i, i + 2)] =
    (countPairs[data.slice(i, i + 2)] ?? 0) + 1;
}

for (let step = 1; step <= 40; step++) {
  const temp = {};
  for (const countPerPair in countPairs) {
    for (const pair of pairs[countPerPair]) {
      temp[pair] = (temp[pair] ?? 0) + countPairs[countPerPair];
    }
  }
  countPairs = temp;
}

const eachCount = {
  [data[0]]: 1,
};
for (const pair in countPairs) {
  eachCount[pair[1]] = (eachCount[pair[1]] ?? 0) + countPairs[pair];
}

console.log(
  Math.max(...Object.values(eachCount)) - Math.min(...Object.values(eachCount))
);
