// How we can write arrow function

// Normal method to write a function
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3));

// Function can be assign to a variable
var sum = function (p, q) {
  return p + q;
};

// Arrow function
var sum = (x, y) => {
  return a + b;
};

// if there's only one return statment 
// we can reduce it to
var sum = (x, y) => x + y;
