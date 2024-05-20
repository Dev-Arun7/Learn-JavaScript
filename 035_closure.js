
function abc(){
    this.x;
    this.y;

    this.set = function(a, b){
        this.x = a;
        this.y = b;
    }

    this.display = function(){
        console.log(this.x  + this.y)
    }
}

var ob = new abc();

ob.set(10, 20);
ob.display()

