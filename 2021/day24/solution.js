//! IT works just takes like... 9^14 iterations to solve xd

let input = require("./input").module.split(/\n\n/);

let chunkIndex = -1;
for (const chunk of input) {
  chunkIndex++;
  input[chunkIndex] = chunk.split(/\n/);
}

function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return value;
  }
}

function getPosition(string, subString, index) {
  return string.split(subString, index - 1).join(subString).length;
}
let stack = {
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};
let wValues = "";
const commands = {
  inp: function (inpIndex) {
    stack.w = parseInt(wValues[inpIndex]);
  },
  add: function (a, b) {
    b = filterInt(b);
    if (!isNaN(b)) stack[a] += b;
    else stack[a] += stack[b];
  },
  mul: function (a, b) {
    b = filterInt(b);
    if (!isNaN(b)) stack[a] *= b;
    else stack[a] *= stack[b];
  },
  div: function (a, b) {
    b = filterInt(b);
    if (!isNaN(b)) stack[a] = Math.floor(stack[a] / b);
    else stack[a] = Math.floor(stack[a] / stack[b]);
  },
  mod: function (a, b) {
    b = filterInt(b);
    if (!isNaN(b)) stack[a] %= b;
    else stack[a] %= stack[b];
  },
  eql: function (a, b) {
    b = filterInt(b);
    if (!isNaN(b)) stack[a] = stack[a] === b ? 1 : 0;
    else stack[a] = stack[a] === stack[b] ? 1 : 0;
  },
};

const executeCommnad = (currentCommand, inputIndex) => {
  let command = currentCommand.split(" ");
  switch (command[0]) {
    case "inp":
      commands.inp(inputIndex);
      break;
    case "add":
      commands.add(command[1], command[2]);
      break;
    case "mul":
      commands.mul(command[1], command[2]);
      break;
    case "div":
      commands.div(command[1], command[2]);
      break;
    case "mod":
      commands.mod(command[1], command[2]);
      break;
    case "eql":
      commands.eql(command[1], command[2]);
      break;
    default:
      break;
  }
};

const results = [];
const solve = () => {
  for (let index = 1; index <= 9; index++) {
    recurse(index.toString(), 1);
  }
};
const recurse = (currentSN, depth, memo = {}) => {
  let stackTemp = executeCommands(currentSN, memo);
  if (depth === 14) {
    if (stack.z === 0) results.push(currentSN);
    stack = {
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    };
    currentSN = currentSN.slice(0, -1);
    return;
  } else memo[currentSN] = stackTemp;
  console.log(currentSN);
  for (let index = 1; index <= 9; index++) {
    recurse(currentSN + index.toString(), depth + 1, memo);
  }
};

const executeCommands = (inputValues, memo) => {
  inpIndex = 0;
  wValues = inputValues.split("");
  let wTemp = inputValues;

  for (var i = wValues.length - 1; i >= 0; i--) {
    if (memo[wTemp]) {
      stack = memo[wTemp];
      inpIndex += wTemp.length;
      break;
    }
    wTemp = wTemp.slice(0, -1);
  }
  let chunk = input[inpIndex];

  for (const line of chunk) {
    executeCommnad(line, inpIndex);
  }

  return { ...stack };
};

solve();

results.sort((a, b) => a - b);
console.log(results[results.length - 1], results[0]);
