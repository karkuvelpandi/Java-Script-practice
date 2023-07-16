// Inheritance:
// Inheriting the properties from one class to another.
// Reusing the existing functionality and adding new features.

class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "Original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }
}

class SpecialPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize); //Accessing parent class constructor.
    this.type = "This works";
  }
  slice() {
    console.log(`${this.type} ${this.size} pizza..!`);
  }
}
/* Need to use keyword super(params) & that keyword calls the 
 constructor of the parent & we need to pass the argument not only in
 the constructor of the child but we need to pass in when we call super()
 because the constructor on the parent for this particular example expects argument.
 */
// Creating Object
const mySpecial = new SpecialPizza("Medium");
mySpecial.slice(); //Output : Our the works medium pizza.
