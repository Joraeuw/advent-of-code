const input_z = [2, 2, 4, 2, 3, 5, 6];
const h_z = 100;
const global_xy = 100;
const count = 5;

let currMax = input_z[0];
let sum = 0;
for (let idx = 1; idx < input_z.length; idx++) {
  if (
    (input_z[idx - 1] < input_z[idx] && input_z[idx] >= currMax) ||
    input_z[idx] > currMax
  )
    currMax = input_z[idx];
  sum += global_xy * Math.max(Math.min(h_z, currMax) - input_z[idx], 0);
}

console.log(sum);
