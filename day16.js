let input = require("./input").module.pure;

let binary = "";
for (let i = 0; i < input.length; i++) {
  binary += parseInt(input[i], 16).toString(2).padStart(4, "0");
}

let sum = 0;
let recPack = (str) => {
  sum += parseInt(str.slice(0, 3), 2);
  let T = parseInt(str.slice(3, 6), 2);
  let pLen;
  let values = [];
  if (T == 4) {
    let ol = 6;
    let num = "";
    while (str[ol] == "1") {
      num += str.slice(ol + 1, ol + 5);
      ol += 5;
    }
    num += str.slice(ol + 1, ol + 5);
    return [ol + 5, parseInt(num, 2)];
  } else {
    let I = str[6];
    if (I == "0") {
      let L = parseInt(str.slice(7, 22), 2);
      let cnt = 0;
      while (cnt < L) {
        let pack = recPack(str.slice(22 + cnt));
        cnt += pack[0];
        values.push(pack[1]);
      }
      pLen = 22 + L;
    } else {
      let L = parseInt(str.slice(7, 18), 2);
      let cnt = 18;
      for (let i = 0; i < L; i++) {
        let pack = recPack(str.slice(cnt));
        cnt += pack[0];
        values.push(pack[1]);
      }
      pLen = cnt;
    }

    switch (T) {
      case 0:
        return [pLen, values.reduce((a, b) => a + b)];
      case 1:
        return [pLen, values.reduce((a, b) => a * b)];
      case 2:
        return [pLen, values.reduce((a, b) => (a > b ? b : a))];
      case 3:
        return [pLen, values.reduce((a, b) => (a > b ? a : b))];
      case 5:
        return [pLen, values[0] > values[1] ? 1 : 0];
      case 6:
        return [pLen, values[0] < values[1] ? 1 : 0];
      case 7:
        return [pLen, values[0] == values[1] ? 1 : 0];
    }
  }
};

let res = recPack(binary);

console.log(sum);
console.log(res[1]);
