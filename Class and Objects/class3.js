class Funds{
    invester_Id =111;
    get_name(){
        console.log("karkuvel");
    }
    deposit(){
        console.log(100000);
    }
    withdraw(){}
    get_bal(){}
    close_Funds(){}

}

new Funds();

console.log(new Funds())

let invt= new Funds();

console.log(new Funds());

console.log(invt.invester_Id); 

console.log(invt.deposit());     // methods are not accessible by log by access dirwctly

invt.deposit();

invt.get_name();
