
// Class and object
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

var ob1 = new Student();
ob1.set_value("Arun", 25);
console.log(ob1.display());

var ob2 = new Student();
ob2.set_value("Akhil", 12);
console.log(ob2.display());
