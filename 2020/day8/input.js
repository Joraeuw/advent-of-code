const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((entry) => {
    const [operation, data] = entry.split(" ");
    return {
      operation: operation,
      value: parseInt(data),
    };
  });

exports.module = input;
