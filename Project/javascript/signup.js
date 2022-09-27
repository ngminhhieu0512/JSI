function showPassword() {
    var passwordInput = document.getElementById("password-input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}

function showPasswordConfirm() {
    var passwordConfirmInput = document.getElementById("confirm-password-input");
    if (passwordConfirmInput.type === "password") {
        passwordConfirmInput.type = "text"
    } else {
        passwordConfirmInput.type = "password"
    }
}