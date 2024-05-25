
// Filter
function even(n) {
    return n % 2 === 0
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let evens = nums.filter(even)
console.log(evens)
