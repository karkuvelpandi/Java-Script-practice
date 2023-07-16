// Javascript class come in 2015 ES6
// DEFINITIONS:
// class:This is a template or blue print for creating an object. class contain properties and methods.

// constructor: is a special method.It execute automatically during the Object creation.
// Purpose of a constructor: To initialize the object values. It executes only once.
// we can't invoke the constructor method explicitly.

/* "this" keyword : "this" is a pointer pointing or referring to the current object.
Inside the class we using- this keyword to refer class members.
Outside the class we used to refer the object.
*/

class Pizza {
  constructor(type) {
    //Here is where we receive the argument sent during the Object creation.
    this.type = type;
    this.size = "medium";
    this.crust = "Original";
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.crust} crust ${this.type} pizza..!`
    );
  }
}

// Creating an object

const myObj = new Pizza("Onion");
myObj.bake();
//******************************************************************************************* */
// PROBLEM: Even though we have the access to change the properties by accessing using dot notation
// that is not a best practice.
myObj.crust = "Changed crust";
myObj.bake();
// *********************************************************************************************
// Even though we can access & change the value inside the Object which is created through class.
// We must use getters and setters to do that.

class PizzaOne {
  constructor(type) {
    //Here is where we receive the argument sent during the Object creation.
    this.type = type;
    this.size = "medium";
    this.crust = "Original";
  }
  get PizzaCrust() {
    return this.crust;
  }
  set PizzaCrust(pizzacrust) {
    this.crust = pizzacrust;
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.crust} crust ${this.type} pizza..!`
    );
  }
}

const newObj = new PizzaOne("Onion");
newObj.PizzaCrust = "Big";
console.log(newObj.PizzaCrust); //NOTE: while using getter setter we not need to invoke as a function.
/*DEFINITION: 
Getters and setters are special methods in JavaScript classes that allow you to define custom behavior 
for reading and writing object properties. They provide a way to control access to object properties 
and add validation or side effects when getting or setting their values.*/

// *****************************************************************************************
// Instead of using getters and setters we can use direct methods to do the same getting and setting.
//Example:
class PizzaTwo {
  constructor() {
    this.size = "Medium";
    this.crust = "Original";
  }

  getSize() {
    return this.crust;
  }
  setSize(size) {
    this.crust = size;
  }
}
const pizzaObj = new PizzaTwo();
console.log(pizzaObj.getSize());
pizzaObj.setSize("Mini");
console.log(pizzaObj.getSize());
// *******************************************************************************
// PROBLEM: we can access the properties inside the object and manipulate using dot notation.
// But that is not a recommended way to do that one way to do that is setters and getters.
// The second way is to use the use custom methods to manipulate.
// The third way is to use Naming convention to give an information to the fellow coders that this particular property or method is private.

// The third way: Naming convention (_)-using underscore
class IceCream {
  constructor(size) {
    this._size = size;
    this._flavour = "chocolate";
  }
  getFlavour() {
    return this._flavour;
  }
  setFlavour(flavour) {
    this._flavour = flavour;
  }
}
const iceObj = new IceCream("Large");
iceObj._flavour = "strawberry";
console.log(iceObj._flavour);
/*PROBLEM: 
* Even though we are using the (_)underscore this will not really solve the problem or restrict the 
  fellows to manipulate the property or method.
* Still we can use dot notation to access and manipulate the properties and methods.
*/

/*SOLUTION:
 * From new update for class is now its support private and public field keyword.
 */
/**RULES:
 * Private properties are start with the hash symbol (#test).It will be outside the constructor.
 * Any property that were go ahead and set with the parameter we will leave inside the constructor.
 * If we want to private a property that is inside the constructor first 
   we need to initialize as private outside the constructor using (#
 */

// Example
class Juice {
  straw = false;
  #cupSize = "Small";
  #flavour;
  constructor(flavour) {
    this.#flavour = flavour;
  }
  setStraw(straw) {
    this.straw = straw;
  }
  getStraw() {
    return this.straw;
  }
  hereWeGo() {
    console.log(`Here is your ${this.#flavour} juice...!`);
  }
}

const myJuice = new Juice("Orange");
myJuice.hereWeGo(); //Output : Here is your Orange juice...!

// Checking public field
console.log(myJuice.straw); //Output: false
// Checking private field
console.log(myJuice.cupSize); //without # symbol output: undefined
// console.log(myJuice.#cupSize); //With # symbol output: SyntaxError: Private field '#cupSize' must be declared in an enclosing class
