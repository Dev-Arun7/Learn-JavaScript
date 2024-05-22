// Create a new set
let mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Adding duplicate values will be ignored
mySet.add(2);

console.log(mySet); // Output: Set { 1, 2, 3 }
