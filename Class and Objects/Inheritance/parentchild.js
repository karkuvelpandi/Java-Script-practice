class Parent {
    get_Message() {
        console.log("Hi man")
    }
}
class Child extends Parent {
    get_Message2() {
        console.log("Hello ");
    }
}

let a1 = new Child()
a1.get_Message()
a1.get_Message2()
