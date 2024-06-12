
function square(n) {
    return Math.pow(n, 2)
}


const nums = [1, 2, 3, 4, 5]
const squares = nums.map(square);

console.log(squares)

// Map using arrow function
const numbers = [1, 2, 3, 4, 5]
const cubes = numbers.map((n)=> Math.pow(n, 3))
console.log(cubes)