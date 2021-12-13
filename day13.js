const input = require("./input").module.pure;
const fs = require("fs");

let [dataLines, foldsLines] = input.split("\n\n");
dataLines = dataLines.split("\n");
foldsLines = foldsLines.split("\n");

const points = [];
for (const line of dataLines) {
  points.push(line.split(",").map(Number));
}

const folds = [];
for (const fold of foldsLines) {
  const dirAndVal = /(x|y)=(\d+)/.exec(fold);
  if (dirAndVal[1] === "x") folds.push([parseInt(dirAndVal[2]), 0]);
  if (dirAndVal[1] === "y") folds.push([0, parseInt(dirAndVal[2])]);
}

const paper = Array(2000)
  .fill([])
  .map((x) => Array(2000).fill("."));

for (const point of points) {
  paper[point[0]][point[1]] = "#";
}

for (let foldNumber = 0; foldNumber < folds.length; foldNumber++) {
  if (folds[foldNumber][0] === 0) {
    //Folding Y
    const foldY = folds[foldNumber][1];
    for (let row = 0; row < paper.length; row++) {
      for (let col = 0; col < paper[row].length; col++) {
        if (col > foldY) {
          if (paper[row][col] === "#") paper[row][2 * foldY - col] = "#";
          paper[row][col] = ".";
        }
      }
    }
  } else {
    //Folding X
    const foldX = folds[foldNumber][0];
    for (let row = 0; row < paper.length; row++) {
      for (let col = 0; col < paper[row].length; col++) {
        if (row > foldX) {
          if (paper[row][col] === "#") paper[2 * foldX - row][col] = "#";
          paper[row][col] = ".";
        }
      }
    }
  }
}

let counter = 0;
for (const row of paper) {
  for (const col of row) {
    if (col == "#") counter++;
  }
}

let text = "";
for (const row of paper) {
  text += row.toString() + "\n";
}

fs.writeFile("./resultDay13.txt", text, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
