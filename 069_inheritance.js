
// Class and object and inheritance
class Student {
  // constructor is always exicuted
  constructor() {
    console.log("Constructor evoked...");
  }
  set_value(nm, ag) {
    this.name = nm;
    this.age = ag;
  }
  display() {
    return ` Name : ${this.name} Age : ${this.age}`;
  }
}

// Inheritance
class child extends Student {}

var ob1 = new child();
ob1.set_value("Sujatha", 44);
console.log(ob1.display());
