// Here creating two objects

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

// creating an object
var ob = new abc();

ob.set(10, 20);
ob.display()

// creating another object
var ob1 = new abc();
ob1.set(25, 35);
ob1.display()
