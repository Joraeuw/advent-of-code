let input = require("./input").module.inputText;

const gotoNumbers = input[0].split(",").map((x) => parseInt(x));
let boards = [];
let board = [];
//Init and store data
for (const line of input.slice(2)) {
  if (line.length === 0) {
    boards.push(board);
    board = [];
    continue;
  }
  var row = line
    .split(" ")
    .filter((x) => x)
    .map((x) => parseInt(x));

  board.push(row);
}
boards.push(board);

//Some func
const removeElement = (board, val) => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === val) {
        board[i][j] = null;
      }
    }
  }
};
const isSolved = (board) => {
  for (var i = 0; i < board.length; i++) {
    var rc = 0;
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === null) {
        rc += 1;
      }
    }
    if (rc === board[0].length) {
      return true;
    }
  }
  for (var j = 0; j < board[0].length; j++) {
    var cc = 0;
    for (var i = 0; i < board.length; i++) {
      if (board[i][j] === null) {
        cc += 1;
      }
    }
    if (cc === board.length) {
      return true;
    }
  }
  return false;
};

const calcScore = (board) => {
  var result = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] !== null) {
        result += board[i][j];
      }
    }
  }
  return result;
};

//Solve stuff
let result;

const solve = (boards, gotoNumbers) => {
  const winningBoard = new Set();
  for (const num of gotoNumbers) {
    let index = -1;
    for (const board of boards) {
      index++;
      if (winningBoard.has(index)) continue;
      removeElement(board, num);
      if (isSolved(board)) winningBoard.add(index);
      if (winningBoard.size === 1) return (result = calcScore(board) * num);
    }
  }
};

solve(boards, gotoNumbers);

console.log(result);
