
function abc(){
    var x = 20;
    function xyz(){
        console.log("From inner function xyz")
        console.log(x)
    }
    xyz()
}

abc()
