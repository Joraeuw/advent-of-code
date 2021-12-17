// const input = require("./input").module.pure;

// const reg = /(\d+)..(\d+), y=((-|.)\d+)..((-|.)\d+)/.exec(input);

// const targetArea = {
//   xMin: parseInt(reg[1]),
//   xMax: parseInt(reg[2]),
//   yMin: parseInt(reg[3]),
//   yMax: parseInt(reg[5]),
// };

const isWithinTargetArea = (x, y) =>
  targetArea.xMin <= x &&
  targetArea.xMax >= x &&
  targetArea.yMin <= y &&
  targetArea.yMax >= y
    ? true
    : false;

// let xSize = targetArea.xMax - targetArea.xMin;
// let ySize = targetArea.yMax - targetArea.yMin;
// let startPositionY = 0;
// let startPositionX = 0;

// for (let currX = targetArea.xMin; currX <= targetArea.xMax; currX++) {
//   for (let currY = targetArea.yMin; currY <= targetArea.yMax; currY++) {

//   }
// }

const input = require("./input").module.pure;
const reg = /(\d+)..(\d+), y=((-|.)\d+)..((-|.)\d+)/.exec(input);

const targetArea = {
  xMin: parseInt(reg[1]),
  xMax: parseInt(reg[2]),
  yMin: parseInt(reg[3]),
  yMax: parseInt(reg[5]),
};

let currCase = (startX, startY) => {
  let currentX = 0;
  let currentY = 0;
  let velocityX = startX;
  let velocityY = startY;

  let maxHeight = 0;

  while (currentX <= targetArea.xMax && currentY >= targetArea.yMin) {
    currentX += velocityX;
    currentY += velocityY;
    velocityX += velocityX < 0 ? 1 : velocityX > 0 ? -1 : 0;
    velocityY -= 1;
    if (currentY > maxHeight) {
      maxHeight = currentY;
    }
    if (
      currentX >= targetArea.xMin &&
      currentX <= targetArea.xMax &&
      currentY >= targetArea.yMin &&
      currentY <= targetArea.yMax
    ) {
      return maxHeight;
    }
  }
  return null;
};

let count = 0;
for (let y = -500; y <= 500; y += 1) {
  for (let x = 1; x <= 500; x += 1) {
    const result = currCase(x, y);
    if (result != null) {
      count += 1;
    }
  }
}

console.log(count);
