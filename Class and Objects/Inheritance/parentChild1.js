class Account {
    open_Account() {
        console.log("hello man");
    }
}
class saving_Account extends Account {
    deposit() {
        console.log("hi ");
    }
}
class current_Account extends Account { }

let a1 = new saving_Account().open_Account()
let a2 = new saving_Account().deposit()