class Employee {
    eId;
    eName;
    eSalary;
    constructor(a, b, c) {
        this.eId = a;
        this.eName = b;
        this.eSalary = c;
    }
}
let a = new Employee(101, 'karkuvel pandi', 400000)

let b = new Employee(122, 'raj', 500000)
console.log(a);
console.log(b);