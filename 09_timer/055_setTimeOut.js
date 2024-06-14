// Set time out with run again and again
function abc (){
    setTimeout(function () {
        console.log("Arun")
        abc ();
    }, 1000)
}
abc ();
