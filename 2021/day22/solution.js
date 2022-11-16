let input = require("./input").module.split("\n");
let reg =
  /x=(-?\d*\.{0,1}\d+)..(-?\d*\.{0,1}\d+),y=(-?\d*\.{0,1}\d+)..(-?\d*\.{0,1}\d+),z=(-?\d*\.{0,1}\d+)..(-?\d*\.{0,1}\d+)/;

const intersects = (a, b) =>
  a.xMin <= b.xMax &&
  a.xMax >= b.xMin &&
  a.yMin <= b.yMax &&
  a.yMax >= b.yMin &&
  a.zMin <= b.zMax &&
  a.zMax >= b.zMin;

const contains = (a, b) =>
  a.xMin <= b.xMin &&
  a.xMax >= b.xMax &&
  a.yMin <= b.yMin &&
  a.yMax >= b.yMax &&
  a.zMin <= b.zMin &&
  a.zMax >= b.zMax;

const volume = (cube) =>
  BigInt(cube.xMax - cube.xMin) *
  BigInt(cube.yMax - cube.yMin) *
  BigInt(cube.zMax - cube.zMin);

const intersection = (cubeA, cubeB) => {
  if (contains(cubeB, cubeA)) return [];
  if (!intersects(cubeA, cubeB)) return [cubeA];

  let xWithin = [cubeB.xMin, cubeB.xMax].filter(
    (x) => cubeA.xMin < x && x < cubeA.xMax
  );
  let xIt = [cubeA.xMin, ...xWithin, cubeA.xMax];

  let yWithin = [cubeB.yMin, cubeB.yMax].filter(
    (y) => cubeA.yMin < y && y < cubeA.yMax
  );
  let yIt = [cubeA.yMin, ...yWithin, cubeA.yMax];

  let zWithin = [cubeB.zMin, cubeB.zMax].filter(
    (z) => cubeA.zMin < z && z < cubeA.zMax
  );
  let zIt = [cubeA.zMin, ...zWithin, cubeA.zMax];

  let result = [];

  for (let x = 0; x < xIt.length - 1; x++) {
    for (let y = 0; y < yIt.length - 1; y++) {
      for (let z = 0; z < zIt.length - 1; z++) {
        result.push({
          xMin: xIt[x],
          yMin: yIt[y],
          zMin: zIt[z],
          xMax: xIt[x + 1],
          yMax: yIt[y + 1],
          zMax: zIt[z + 1],
        });
      }
    }
  }

  return result.filter((cube) => !contains(cubeB, cube));
};

let cubes = [];
for (const line of input) {
  let [operation, coord] = line.split(" ");
  coord = reg.exec(coord);
  let cube = {
    xMin: BigInt(coord[1]),
    xMax: BigInt(coord[2]),
    yMin: BigInt(coord[3]),
    yMax: BigInt(coord[4]),
    zMin: BigInt(coord[5]),
    zMax: BigInt(coord[6]),
  };

  cubes = cubes.flatMap((cube1) => intersection(cube1, cube));

  if (operation === "on") {
    cubes.push(cube);
  }
}

console.log(cubes.map((cube) => volume(cube)).reduce((a, b) => a + b, 0n));
