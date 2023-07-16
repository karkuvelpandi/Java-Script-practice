// Key value pairs in curly braces
const myObj={
    name:"Karkuvel"
}

console.log(myObj.name); // karkuvel
console.log(myObj["name"]); // karkuvel

// Objects can hold string, boolean, array, objects, method, etc,.

// Example
const anotherObj={
    alive:true,
    answer:42,
    hobbies:["code","trade"],
    beverage:{
        morning:"curd",
        evening:"milk"
    },
    action:function(){
        return `Time for ${this.beverage.morning}`  
    }

}

console.log(anotherObj.action());      //Time for curd.

// Example- Creating new object.
const vehicle={
    wheels:4,
    engine:function(){
        return "vroom...!"
    }
}

const truck=Object.create(vehicle)
truck.doors=2

/*Creating a new object called truck using Object.create(vehicle). 
This creates a new object truck that inherits properties from the vehicle object. 
In other words, truck becomes a new object that has the vehicle object as its prototype.
*/
console.log(truck); // {doors:2}  - Whole object from vehicle not visible but truck object holding the value pairs we can access the values.
console.log(truck.wheels); // 4
console.log(truck.engine()); // vroom...!
/*
In summary, by using Object.create(), you can create a new object (truck) that 
inherits properties from an existing object (vehicle). The new object can have 
its own additional properties, and it can also access and use the properties 
inherited from the prototype object.
 */


// Creating another Object

const car=Object.create(vehicle)
car.doors=4
car.engine=function(){return "whoosh...!"}
console.log(car.engine());  //whoosh...! - here we are overwritten the vehicle method(engine)


// Creating another Object

const tesla=Object.create(car)

console.log(tesla.wheels);  //4
tesla.engine=function(){return"shhh...!"}
console.log(tesla.engine()); //  shhh...!