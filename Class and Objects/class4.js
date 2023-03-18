class Employee {
    eId;
    eName;
    setEid(id) {this.eId=id }
    getEid(id) { }
}

let a1 = new Employee()
a1.setEid(101);
a1.getEid();

console.log(a1);
// new Employee()