let input = require("./input").module;
input.shift();

let data = [];
let toFlash = [];
let toBeReset = [];
let flashes = 0;

let index = -1;
for (const line of input) {
  index++;
  data[index] = line.split("").map(Number);
}

const includesValue = (arr, [x, y]) => {
  for (const pair of arr) {
    if (pair[0] === x && pair[1] === y) return true;
  }
  return false;
};

const copyMatrix = (matrix) => {
  let newMatrix = [];
  let j = -1;
  for (const row of matrix) {
    j++;
    newMatrix.push([]);
    let i = -1;
    for (const item of row) {
      i++;
      newMatrix[j][i] = item;
    }
  }
  return newMatrix;
};
const isSameMatrix = (matrix1, matrix2) => {
  for (let i = 0; i < matrix1.length; i++)
    for (let j = 0; j < matrix1[i].length; j++) {
      const element1 = matrix1[i][j];
      const element2 = matrix2[i][j];
      if (element1 !== element2) return false;
    }

  return true;
};

for (let iteration = 1; iteration <= 1000; iteration++) {
  data = data.map((row) => row.map((octi) => octi + 1));

  //Do while there is anyting in toFlash
  toFlash = [];
  toBeReset = [];
  let lastData;
  let matricesAreEq;
  do {
    let ri = -1;
    for (const row of data) {
      ri++;
      let ci = -1;
      for (const octi of row) {
        ci++;
        if (octi > 9 && !includesValue(toBeReset, [ri, ci])) {
          toFlash.push([ri, ci]);
          toBeReset.push([ri, ci]);
        }
      }
    }
    lastData = copyMatrix(data);
    for (const coordinates of toFlash) {
      const row = coordinates[0];
      const col = coordinates[1];

      if (row != 0) data[row - 1][col]++;
      if (row != data.length - 1) data[row + 1][col]++;
      if (col != 0) data[row][col - 1]++;
      if (col != data.length - 1) data[row][col + 1]++;
      if (row != 0 && col != 0) data[row - 1][col - 1]++;
      if (row != data.length - 1 && col != 0) data[row + 1][col - 1]++;
      if (row != 0 && col != data.length - 1) data[row - 1][col + 1]++;
      if (row != data.length - 1 && col != data.length - 1)
        data[row + 1][col + 1]++;
    }
    toFlash = [];
    matricesAreEq = isSameMatrix(lastData, data);
  } while (!matricesAreEq);
  //After do while remove elements!
  flashes += toBeReset.length;
  for (const coordinates of toBeReset) data[coordinates[0]][coordinates[1]] = 0;

  const allEqual = (arr) =>
    arr.every((row) => row.every((el) => el === row[0]));

  if (allEqual(data)) {
    console.log(iteration);
    return;
  }
}

console.log(flashes);
