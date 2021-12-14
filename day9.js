let input = require("./input").module.inputText;

let matrix = [];
for (const line of input) {
  matrix.push(line.split("").map(Number));
}
let lows = [];
let countInBasin = 0;
let basins = new Set();
let sum = 0;
let visited = Array(matrix.length)
  .fill()
  .map(() => Array(matrix[0].length).fill(false));

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    const num = matrix[row][col];
    const up = row - 1 >= 0 ? matrix[row - 1][col] : Infinity;
    const down = row + 1 <= matrix.length - 1 ? matrix[row + 1][col] : Infinity;
    const left = col - 1 >= 0 ? matrix[row][col - 1] : Infinity;
    const right =
      col + 1 <= matrix[row].length - 1 ? matrix[row][col + 1] : Infinity;
    const minAdj = Math.min(up, down, left, right);

    if (num < minAdj) {
      lows.push([row, col]);
      sum += num + 1;
    }
  }
}

const getBasinSize = ([y, x]) => {
  if (y < 0 || y > matrix.length - 1) return 0;
  if (x < 0 || x > matrix[0].length - 1) return 0;
  if (matrix[y][x] === -1) return 0;
  if (matrix[y][x] === 9) return 0;

  matrix[y][x] = -1;
  return (
    1 +
    getBasinSize([y + 1, x]) +
    getBasinSize([y - 1, x]) +
    getBasinSize([y, x + 1]) +
    getBasinSize([y, x - 1])
  );
};
const basinSize = lows.map(getBasinSize);
basinSize.sort((a, b) => a - b);
console.log(basinSize.slice(-3).reduce((a, b) => a * b, 1));
console.log(sum);
console.log(basinSize.slice(-3));

//console.log(sum);
