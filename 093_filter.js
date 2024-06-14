// Return all "firstName" with who has age greater than 30
const users = [
    { firstName: "arun", lastName: "balakrishnan", age: 28 },
    { firstName: "akhil", lastName: "balakrishnan", age: 25 },
    { firstName: "anila", lastName: "vr", age: 33 },
    { firstName: "sujatha", lastName: "n", age: 44 },
  ];
  
  const out = users.filter((x) => x.age > 30).map((item)=>item.firstName)
  console.log(out);
  