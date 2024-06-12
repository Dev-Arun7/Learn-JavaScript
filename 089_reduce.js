const arr = [1, 20, 7, 8, 99];

const output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);
