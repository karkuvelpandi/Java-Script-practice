function validation1() {
    let name = document.getElementById("inputbox1").value
    if (name == "" && name.length <= 4) {
        document.getElementById("span1").innerHTML = "*Please enter name"
    }

    let email = document.getElementById("inputbox2").value
    if (email == "") {
        document.getElementById("span2").innerHTML = "*Please enter Email"
    }

    let mobile = document.getElementById("inputbox3").value
    if (mobile == "") {
        document.getElementById("span3").innerHTML = "*Please enter mobile"
    }

}