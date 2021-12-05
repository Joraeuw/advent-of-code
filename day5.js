const input = require("./input").module.pure;

let lines = input.split(/\n/).filter((x) => x);
let re = /^(\d+),(\d+) -> (\d+),(\d+)$/;

let grid = Array.from({ length: 1000 }, () =>
  Array.from({ length: 1000 }, () => 0)
);

for (const line of lines) {
  //regex split
  let row = re.exec(line);

  let x1 = row[1];
  let y1 = row[2];
  let x2 = row[3];
  let y2 = row[4];
  if (x1 === x2) {
    //if y1 !== y2 && x1 === x2 we
    //increase the grid data by 1 till the end of x
    //
    // ---------------
    //
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) grid[y][x1]++;
  } else if (y1 === y2) {
    //if y1 === y2 && x1 !== x2 we
    //increase the grid data by 1 till the end of y
    //        |
    //        |
    //        |
    //        |
    //        |
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) grid[y1][x]++;
  } else if ((x1 > x2 && y1 > y2) || (x1 < x2 && y1 < y2)) {
    //if x1 > x2 && y1 > y2 we
    //incrase y and x at the same time to get diagonal
    //Also tanA < 0
    //     \
    //      \
    //       \
    //        \
    for (
      let x = Math.min(x1, x2), y = Math.min(y1, y2);
      x <= Math.max(x1, x2);
      x++, y++
    )
      grid[y][x]++;
  } else {
    //tanA > 0
    //        /
    //      /
    //    /
    //  /
    for (
      let x = Math.min(x1, x2), y = Math.max(y1, y2);
      x <= Math.max(x1, x2);
      x++, y--
    )
      grid[y][x]++;
  }
}
const count = grid.reduce(
  (acc, line) => acc + line.filter((x) => x > 1).length,
  0
);
console.log(count);
