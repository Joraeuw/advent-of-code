const input = require("./input").module;
const MAX_ROWS = 128;
const MAX_COLS = 8;

//! Part 1
const getSeatId = (entry) => {
  let row_idx_L = 0,
    row_idx_R = MAX_ROWS - 1,
    col_idx_L = 0,
    col_idx_R = MAX_COLS - 1;

  for (let operation_idx = 0; operation_idx < entry.length; operation_idx++) {
    const operation = entry[operation_idx];
    if (operation === "F") row_idx_R -= (row_idx_R - row_idx_L + 1) / 2;
    else if (operation === "B") row_idx_L += (row_idx_R - row_idx_L + 1) / 2;
    else if (operation === "L") col_idx_R -= (col_idx_R - col_idx_L + 1) / 2;
    else if (operation === "R") col_idx_L += (col_idx_R - col_idx_L + 1) / 2;
    if (row_idx_R === row_idx_L && col_idx_R === col_idx_L) {
      return row_idx_R * 8 + col_idx_R;
    }
  }
};

let max = -Infinity;
for (let t = 0; t < input.length; t++) {
  const entry = input[t];
  const seatId = getSeatId(entry);
  if (seatId > max) max = seatId;
}

console.log("Part 1:", max);

//! Part 2
const getSeatIds = () => {
  const seatIds = [];
  for (let t = 0; t < input.length; t++) {
    const entry = input[t];
    seatIds.push(getSeatId(entry));
  }
  return seatIds;
};

const seatIds = getSeatIds().sort((a, b) => a - b);
let myId = Infinity;
min = seatIds[0];
for (const id of seatIds) {
  if (min !== id) {
    myId = min;
    break;
  }
  min++;
}

console.log("Part 2:", myId);
