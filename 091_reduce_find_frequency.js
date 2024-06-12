const users = [
  { firstName: "arun", lastName: "balakrishnan", age: 33 },
  { firstName: "akhil", lastName: "balakrishnan", age: 25 },
  { firstName: "anila", lastName: "vr", age: 33 },
  { firstName: "sujatha", lastName: "n", age: 44 },
];

const out = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(out);
