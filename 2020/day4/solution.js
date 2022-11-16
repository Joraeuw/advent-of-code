const input = require("./input").module;

const getKey = (pair) => {
  [key, value] = pair.split(":");
  return key;
};

const getKeys = (entry) => {
  let keys = [];
  for (let idx = 0; idx < entry.length; idx++) {
    const pair = entry[idx];
    keys.push(getKey(pair));
  }
  return keys;
};
//! Part 1
let valids = 0;

for (let entryIdx = 0; entryIdx < input.length; entryIdx++) {
  const entry = input[entryIdx];
  const keys = getKeys(entry);
  if (keys.length === 8) valids++;
  if (keys.length === 7 && !keys.includes("cid")) valids++;
}

console.log("Part 1:", valids);

//! Part 2
const between = (min, max, value) => min <= value && value <= max;

const getPairs = (entry) => {
  let map = {};
  for (let idx = 0; idx < entry.length; idx++) {
    const el = entry[idx];
    [key, value] = el.split(":");
    map[key] = value;
  }
  return map;
};

const validateHgt = (hgt) => {
  if (!hgt) return false;
  const reg = /(\d+)(\w+)/;
  const [_, h, domain] = reg.exec(hgt);
  return domain == "cm"
    ? between(150, 193, h)
    : domain == "in"
    ? between(59, 76, h)
    : false;
};

const validateHcl = (hcl) => /#[0-9a-f]{6}/.test(hcl);
const validateEcl = (ecl) =>
  ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl);

const validatePid = (pid) => /^[0-9]{9}$/.test(pid);

valids = 0;

for (let entryIdx = 0; entryIdx < input.length; entryIdx++) {
  const entry = input[entryIdx];
  const pairs = getPairs(entry);
  const cond =
    between(1920, 2002, parseInt(pairs["byr"])) &&
    between(2010, 2020, parseInt(pairs["iyr"])) &&
    between(2020, 2030, parseInt(pairs["eyr"])) &&
    validateHgt(pairs["hgt"]) &&
    validateHcl(pairs["hcl"]) &&
    validateEcl(pairs["ecl"]) &&
    validatePid(pairs["pid"]);
  if (cond) valids++;
  // if (entry.length === 7 && !pairs["cid"] && cond) valids++;
  // if (keys.length === 8) valids++;
  // if (keys.length === 7 && !keys.includes("cid")) valids++;
}

console.log("Part 2:", valids);
