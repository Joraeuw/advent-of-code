const input = require("./input").module;
const OPERATIONS = {
  NOP: "nop",
  JMP: "jmp",
  ACC: "acc",
};
//! Part 1
let acc = 0;
let idx = 0;
let visitedIdx = new Set();
while (true) {
  if (visitedIdx.has(idx)) break;
  visitedIdx.add(idx);
  if (input[idx].operation === OPERATIONS.ACC) acc += input[idx].value;
  else if (input[idx].operation === OPERATIONS.JMP) {
    idx += input[idx].value;
    continue;
  }
  idx++;
}
console.log("Part 1:", acc);
//! Part 2

const loopFails = (data) => {
  let idx = 0;
  let acc = 0;
  let visitedIdx = new Set();
  while (true) {
    if (visitedIdx.has(idx)) return [true, acc];
    else if (data.length === idx) return [false, acc];
    visitedIdx.add(idx);
    if (data[idx].operation === OPERATIONS.JMP) {
      idx += data[idx].value;
      continue;
    } else if (data[idx].operation === OPERATIONS.ACC) acc += data[idx].value;
    idx++;
  }
};

acc = 0;
let mutationIdx = 0;
// visitedIdx = new Set();
while (true) {
  let currData = input.map((a) => {
    return { ...a };
  });
  if (currData[mutationIdx].operation === OPERATIONS.JMP)
    currData[mutationIdx].operation = OPERATIONS.NOP;
  else if (currData[mutationIdx].operation === OPERATIONS.NOP)
    currData[mutationIdx].operation = OPERATIONS.JMP;
  else {
    mutationIdx++;
    continue;
  }
  const [isLooping, currAcc] = loopFails(currData);
  if (!isLooping) {
    acc = currAcc;
    break;
  }
  mutationIdx++;
}
console.log("Part 2:", acc);
