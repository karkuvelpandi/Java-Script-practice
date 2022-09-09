const bcrypt = require('bcrypt')

let user = {
    name: "Pandi",
    email: "karkuvelpandi7@gmail.com",
    password: "pandi123",
    cc: 123412341234,
    cvv: 122
}

//convert user sensitive data to hashed format.

let salt = bcrypt.getsaltsync(10);
let new_cc = bcrypt.hashsync(user.cc, salt);


console.log(user.cc);
console.log(new_cc);
