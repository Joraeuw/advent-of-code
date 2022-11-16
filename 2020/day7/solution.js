const input = require("./input").module;

//! Part 1
const has = (bagEntry, bag) => {
  for (const containedBag of Object.values(bagEntry)[0]) {
    if (containedBag.type === bag) return Object.keys(bagEntry)[0];
  }
  return false;
};
let resultBags = new Set();
const whoHas = (bag) => {
  for (const bagEntry of input) {
    const cond = has(bagEntry, bag);
    if (cond) {
      resultBags.add(cond);
      whoHas(cond);
    }
  }
};
whoHas("shiny gold");
console.log("Part 1", resultBags.size);

//! Part 2
function keyfind(bag) {
  for (const currBag of input) {
    if (currBag[bag]) return currBag[bag];
  }
  return false;
}
function containingsCountRec(bag) {
  let res = 0;
  if (bag[0]?.count !== NaN)
    for (const contBag of bag) {
      res += contBag.count + containingsCountRec(keyfind(contBag.type));
    }
  else {
    return 0;
  }
  return res;
}
const containingsCount = (rootBag) => {
  bag = keyfind(rootBag);
  let res = 0;
  for (const contBag of bag) {
    res += contBag.count + containingsCountRec(keyfind(contBag.type));
  }
};

containingsCount("shiny gold");
