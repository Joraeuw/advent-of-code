let p1Pos = 6;
let p2Pos = 10;

let variants = [];
for (let firstNum = 1; firstNum <= 3; firstNum++) {
  for (let secondNum = 1; secondNum <= 3; secondNum++) {
    for (let thirdNum = 1; thirdNum <= 3; thirdNum++) {
      variants.push([firstNum, secondNum, thirdNum]);
    }
  }
}

let wins = new Map();

function recurse(p1, p2, s1 = 0, s2 = 0) {
  if (s2 >= 21) return [0, 1];

  const key = [p1, p2, s1, s2].join(",");
  const memo = wins.get(key);
  if (memo != null) return memo;

  let acc = [0, 0];
  for (const rolls of variants) {
    let n1 = p1 + rolls[0] + rolls[1] + rolls[2];
    n1 = n1 > 10 ? n1 % 10 : n1;
    let ns1 = s1 + n1;
    let newAcc = recurse(p2, n1, s2, ns1);
    acc[0] += newAcc[1];
    acc[1] += newAcc[0];
  }

  wins.set(key, acc);
  return acc;
}

const count = recurse(p1Pos, p2Pos);
console.log(Math.max(count[0], count[1]));
