// let input = require("./input").module.pure;
// let lines = input.trim().split(/\n/);
// const reg = /(\w+)-([A-Za-z]+)/;
// const paths = {};

// for (const line of lines) {
//   const [b, e] = [reg.exec(line)[1], reg.exec(line)[2]];
//   paths[b] = [...(paths[b] ?? []), e];
//   paths[e] = [...(paths[e] ?? []), b];
// }
// const found = [];

// function pathFind(pos, current) {
//   if (pos === "end") {
//     found.push([...current, pos]);
//     return;
//   }
//   const next = [...current, pos];
//   for (const path of paths[pos])
//     if (path.toLowerCase() !== path || current.indexOf(path) === -1)
//       pathFind(path, next);
// }

// pathFind("start", []);

// console.log(found.length);
let input = require("./input").module.pure;
let lines = input.trim().split(/\n/);

const reg = /^(\w+)-(\w+)$/;
const paths = {};

for (const line of lines) {
  const [b, e] = [reg.exec(line)[1], reg.exec(line)[2]];
  paths[b] = [...(paths[b] ?? []), e];
  paths[e] = [...(paths[e] ?? []), b];
}
const found = [];

function pathFind(pos, current) {
  if (pos === "start" && current.length > 0) return;
  if (pos === "end") {
    found.push([...current, pos]);
    return;
  }
  const next = [...current, pos];

  const counts = {};
  for (const char of next)
    if (char.toLowerCase() === char) counts[char] = (counts[char] ?? 0) + 1;
  const hasLowDup = Object.values(counts).some((v) => v > 1);

  for (const dir of paths[pos])
    if (!hasLowDup || dir.toLowerCase() !== dir || current.indexOf(dir) === -1)
      pathFind(dir, next);
}

pathFind("start", []);

for (const line of found) {
  let str = "";
  for (const val of line) {
    str += val + " => ";
  }
  console.log(str);
}
//console.log(found.map(line => ));
