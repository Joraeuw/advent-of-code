const input = require("./input").module;

let getOcupiedCount = (row, col, state) => {
  let ocupiedCount = 0;
  const isLeftEdge = col === 0;
  const isRightEdge = col === state[0].length - 1;
  const isUp = row === 0;
  const isDown = row === state.length - 1;
  console.log(row, col);
  if (!isDown && state[row + 1][col] === "#") ocupiedCount++;
  if (!isRightEdge && state[row][col + 1] === "#") ocupiedCount++;
  if (!isDown && !isRightEdge && state[row + 1][col + 1] === "#")
    ocupiedCount++;
  if (!isUp && state[row - 1][col] === "#") ocupiedCount++;
  if (!isLeftEdge && state[row][col - 1] === "#") ocupiedCount++;
  if (!isLeftEdge && !isUp && state[row + 1][col] === "#") ocupiedCount++;
  if (!isUp && !isRightEdge && state[row - 1][col + 1] === "#") ocupiedCount++;
  if (!isDown && !isLeftEdge && state[row + 1][col - 1] === "#") ocupiedCount++;
  return ocupiedCount;
};

let step = (state) => {
  let nextState = [...state];
  for (let rowIdx = 0; rowIdx < state.length; rowIdx++) {
    for (let colIdx = 0; colIdx < state[rowIdx].length; colIdx++) {
      const ocupiedCount = getOcupiedCount(rowIdx, colIdx, state);
      if (state[rowIdx][colIdx] === "L" && ocupiedCount === 0)
        nextState[rowIdx][colIdx] = "#";
      else if (state[rowIdx][colIdx] === "#" && ocupiedCount >= 4)
        nextState[rowIdx][colIdx] = "L";
    }
  }
};

//! Part 1

let currState = input,
  prevState = [];
do {
  prevState = currState;
  currState = step(prevState);
} while (prevState != currState);
console.log(currState);
//! Part 2
