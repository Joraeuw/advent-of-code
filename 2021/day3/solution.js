let INPUT = require("./input").module;

function spliceSlice(str, index, count, add) {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

const removeElements = (input, data) => {
  for (let column = 0; column < input.length; column++) {
    let removedCount = 0;
    data.indecies.forEach((element) => {
      input[column] = spliceSlice(input[column], element - removedCount, 1);
      removedCount++;
    });
  }
};

const reversedInputOx = Array(INPUT[0].length).fill("");
const reversedInputCo2 = Array(INPUT[0].length).fill("");

for (let col = 0; col < INPUT[0].length; col++) {
  for (let row = 0; row < INPUT.length; row++) {
    reversedInputOx[col] += INPUT[row][col];
  }
}

for (let col = 0; col < INPUT[0].length; col++) {
  for (let row = 0; row < INPUT.length; row++) {
    reversedInputCo2[col] += INPUT[row][col];
  }
}

let col = 0;

do {
  //Figure out the count of zeros and ones in each col
  let data = { 0: { count: 0, indecies: [] }, 1: { count: 0, indecies: [] } };

  for (let row = 0; row < reversedInputOx[col].length; row++) {
    const bitVal = reversedInputOx[col][row];
    if (bitVal === "0") {
      data[0].count++;
      data[0].indecies.push(row);
    } else {
      data[1].count++;
      data[1].indecies.push(row);
    }
  }

  //Remove elements
  if (data[1].count > data[0].count) {
    removeElements(reversedInputOx, data[0]);
  } else if (data[1].count < data[0].count) {
    removeElements(reversedInputOx, data[1]);
  } else {
    removeElements(reversedInputOx, data[0]);
  }
  col++;
} while (reversedInputOx[0].length !== 1);

col = 0;
do {
  //Figure out the count of zeros and ones in each col
  let data = { 0: { count: 0, indecies: [] }, 1: { count: 0, indecies: [] } };

  for (let row = 0; row < reversedInputCo2[col].length; row++) {
    const bitVal = reversedInputCo2[col][row];
    if (bitVal === "0") {
      data[0].count++;
      data[0].indecies.push(row);
    } else {
      data[1].count++;
      data[1].indecies.push(row);
    }
  }

  //Remove elements
  if (data[1].count > data[0].count) {
    removeElements(reversedInputCo2, data[1]);
  } else if (data[1].count < data[0].count) {
    removeElements(reversedInputCo2, data[0]);
  } else {
    removeElements(reversedInputCo2, data[1]);
  }
  col++;
} while (reversedInputCo2[0].length !== 1);

let oxygen = parseInt(reversedInputOx.join(""), 2);
let co2 = parseInt(reversedInputCo2.join(""), 2);

console.log(oxygen * co2);
