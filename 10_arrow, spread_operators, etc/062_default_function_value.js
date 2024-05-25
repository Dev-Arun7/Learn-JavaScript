// Here we are setting a default values for the aruguments
// So if arguments values are passing it will take 
// or default values will take while exicution time

function sum (a = 10, b = 20){
    return a + b;
}

res = sum()
console.log(res)



// Arrow function
const mul = (x = 10, y=20)=> x * y;
console.log(mul())