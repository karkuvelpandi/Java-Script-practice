class Customer {
    constructor() {
        console.log("DEMO parent constructor");
    }
    get_Address() {
        console.log("new address")
    }

}
class saving_Account extends Customer {
    constructor() {
        super()
        console.log("child part constructor");
    }
}

new saving_Account().get_Address()