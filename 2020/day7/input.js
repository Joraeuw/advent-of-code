const path = require("path");
const fs = require("fs");

const matchContainings = /(?<count>\d+) (?<type>\w+ \w+)/;
const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((entry) => {
    let canContain = [];
    let [bagEntry, el2] = entry.split(" bags contain ");
    for (const el of el2.split(",")) {
      const dt = matchContainings.exec(el);
      canContain.push({
        count: parseInt(dt?.groups?.count),
        type: dt?.groups?.type,
      });
    }
    return {
      [bagEntry]: canContain[0]?.groups?.count !== NaN ? canContain : [],
    };
  });

exports.module = input;
