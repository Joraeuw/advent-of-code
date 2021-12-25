let input = require("./input").module.inputText;

const areEq = (m1, m2) => {
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[0].length; j++) {
      if (m1[i][j] != m2[i][j]) return false;
    }
  }
  return true;
};

let seaFloor = [];
for (const line of input) {
  seaFloor.push(line.split(""));
}
let iteration = 1;
let temp = [];
do {
  temp = [...seaFloor.map((x) => [...x])];

  let skips = new Set();
  let hasBeenOcupied = [];
  //Right
  for (let row = 0; row < temp.length; row++) {
    for (let col = 0; col < temp[row].length; col++) {
      if (skips.has(`${row},${col}`)) continue;

      const self = temp[row][col];
      const [right, rightLocation] =
        col + 1 <= temp[row].length - 1
          ? [temp[row][col + 1], [row, col + 1]]
          : [temp[row][0], [row, 0]];

      if (
        self == ">" &&
        right == "." &&
        hasBeenOcupied[`${rightLocation[0]},${rightLocation[1]}`] != self
      ) {
        hasBeenOcupied[`${row},${col}`] = self;
        skips.add(`${rightLocation[0]},${rightLocation[1]}`);
        temp[rightLocation[0]][rightLocation[1]] = self;
        temp[row][col] = ".";
      }
    }
  }
  //Down
  for (let row = 0; row < temp.length; row++) {
    for (let col = 0; col < temp[row].length; col++) {
      if (skips.has(`${row},${col}`)) continue;
      const self = temp[row][col];
      const [down, downLocation] =
        row + 1 <= temp.length - 1
          ? [temp[row + 1][col], [row + 1, col]]
          : [temp[0][col], [0, col]];

      if (
        self == "v" &&
        down == "." &&
        hasBeenOcupied[`${downLocation[0]},${downLocation[1]}`] != self
      ) {
        hasBeenOcupied[`${row},${col}`] = self;
        skips.add(`${downLocation[0]},${downLocation[1]}`);
        temp[downLocation[0]][downLocation[1]] = self;
        temp[row][col] = ".";
      }
    }
  }

  if (areEq(temp, seaFloor)) break;
  seaFloor = temp;
  iteration++;
} while (true);

console.log(iteration);
