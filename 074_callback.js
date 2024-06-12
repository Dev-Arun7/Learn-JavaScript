
// Here we are calling function a and passing b into a
// so first function a is executing and then function b
function a(callback){
    console.log("function a")
    callback();
}                          

function b(){
    console.log("function b")
}

a(b);

