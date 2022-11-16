const path = require("path");
const fs = require("fs");
const { flatten } = require("lodash");

const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n\n")
  .map((el) => flatten(el.split("\n").map((el1) => el1.split(" "))));

exports.module = input;
