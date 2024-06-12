
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10



// Function
sayHello(); // Output: "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}


console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
console.log(myLetVar); // Output: 10

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;
console.log(myConstVar); // Output: 20
