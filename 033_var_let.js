
//var vs let
for(var i = 0; i < 5; ++i){
}
console.log(i) // Here output will be 5

// let
for(let j = 0; j < 5; ++j){
}
console.log(j)  // Here it will show an error. we can't access j outside of the loop
