// Nested function
function abc(){
    xyz()
    console.log("This is from abc")
}

function xyz(){
    console.log("This if from xyz")
}

abc()