let input = require("./input").module;

let lines = input.split(/\n/);
let part1;
let part2;
let sum = 0;

let intersect = (...sets) => {
  if (!sets.length) return new Set();
  const i = sets.reduce((m, s, i) => (s.size < sets[m].size ? i : m), 0);
  const [smallest] = sets.splice(i, 1);
  const res = new Set();
  for (let val of smallest) if (sets.every((s) => s.has(val))) res.add(val);
  return res;
};

let eqSet = (set1, set2) => {
  if (set1.size !== set2.size) return false;
  for (var a of set1) if (!set2.has(a)) return false;
  return true;
};

for (const line of lines) {
  part1 = line.split(" | ")[0];
  part2 = line.split(" | ")[1];

  let digits = part2.split(" ").map((x) => new Set(x));

  let patterns = part1.split(" ").map((x) => new Set(x));

  let one = patterns.find((d) => d.size === 2);
  let four = patterns.find((d) => d.size === 4);
  let seven = patterns.find((d) => d.size === 3);
  let eight = patterns.find((d) => d.size === 7);

  let nine = patterns.find(
    (d) => d.size === 6 && intersect(d, four).size === 4
  );
  let zero = patterns.find(
    (d) => d.size === 6 && intersect(d, seven).size === 3 && d != nine
  );
  let six = patterns.find((d) => d.size === 6 && d != zero && d != nine);

  let five = patterns.find((d) => d.size === 5 && intersect(d, six).size === 5);
  let three = patterns.find(
    (d) => d.size === 5 && intersect(d, four).size === 3 && d != five
  );
  let two = patterns.find((d) => d.size === 5 && d !== five && d !== three);

  //index corresponds to value
  let mappingPatterns = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];

  digits = digits.map((d) => mappingPatterns.findIndex((x) => eqSet(x, d)));
  sum += parseInt(digits.join(""));
}

console.log(sum);
