

function abc(x, y){
    console.log(x(10, 20))
    console.log(y(10, 20))
    }

// Here we are calling a function abc
// Inside we are passing another function
abc(function(a, b){
    return a + b;
    },function(a, b){
        return a * b
    } )

