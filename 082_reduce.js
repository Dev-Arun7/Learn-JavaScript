
// Function to get the maximum of two numbers
function getMax(prev, curr) {
    return Math.max(prev, curr);
}

// Array of marks
const marks = [80, 35, 50, 99, 40, 22];

// Use reduce to find the maximum value in the array
const maximum = marks.reduce(getMax);

// Output the maximum value
console.log(maximum);  // Output: 99
