

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", (e) => {
    e.preventDefault(form);


    checkInput();

})

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()
    const password2Value = password.value.trim();

    if (usernameValue === "") {
        setError(username, 'Please fill the username')
    }
    else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Please fill the email")
    }
    else if (!isEmail(emailValue)) {
        setError(email, 'Not a valid email')
    }
    else {
        setSuccess(email)
    }

    if (passwordValue === "") {
        setError(password, 'Please fill the password')
    }
    else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, 'Please fill the password')
    }
    else if (password2Value !== passwordValue) {
        setError(password2, "Password doesn't match")
    }
    else {
        setSuccess(password2);
    }

}

function isEmail() {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}
function setError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small')
    formGroup.className = "form-group error";
    small.innerText = message;
}
function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}