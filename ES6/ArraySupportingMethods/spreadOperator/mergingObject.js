let user = {
    id: 101,
    name: "Raj",
    email: "raj@gmail.com"
}

let detail = {
    email: "raj@yahoo.com",
    address: "banglore"
}

let user_Details = {
    ...user, ...detail
}

console.log(user_Details);