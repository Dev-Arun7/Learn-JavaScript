const users = [
  { firstName: "arun", lastName: "balakrishnan", age: 33 },
  { firstName: "akhil", lastName: "balakrishnan", age: 25 },
  { firstName: "anila", lastName: "vr", age: 33 },
  { firstName: "sujatha", lastName: "n", age: 44 },
];

const output = users.map((x) => x.firstName + x.lastName + x.age);
console.log(output);
 