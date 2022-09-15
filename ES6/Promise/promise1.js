let takeTask = (success, failure) => {
    //insert data into database and get the result is boolean value

    let flag = false;
    if (flag == true) {
        success("data inserted successfully")
    }
    else {
        failure("not inserted")
    }


}

takeTask((msg) => {
    console.log(msg);
},
    (err) => {
        console.log(err);
    });