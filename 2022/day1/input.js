const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n\n")
  .map((elf) => elf.split("\n").map((num) => parseInt(num)));

exports.module = input;
