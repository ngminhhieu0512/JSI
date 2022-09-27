import Auth from "./auth.js";
import app from "./app.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import Login from "./login.js";
import Home from "./home.js";


class Register extends Auth {
  passwordConfirmInput; // Thẻ <input> có name là passwordConfirm

  constructor() {
    super();

    this.passwordConfirmInput = document.createElement("input");
    this.passwordConfirmInput.setAttribute("type", "password");
    this.passwordConfirmInput.setAttribute("placeholder", "Confirm Password");

    this.loginButton.innerHTML = "Register";
    
    // Phải khai báo theo kiểu expression (=>) mới khai báo được hàm this
    this.formElement.onsubmit = (event) => {
      event.preventDefault();
      this.register();
    };
  }

  /**
   * Sinh ra form o tren HTML
   */
  render() {
    // Xóa sạch HTML bên trên <form></form>
    this.formElement.innerHTML = "";
    // Thêm thẻ <input> để nhập username vào <form></form>
    this.formElement.appendChild(this.usernameInput);
    // Thêm thẻ <input> để nhập password vào <form></form>
    this.formElement.appendChild(this.passwordInput);
    // Thêm thẻ <input> để nhập passwordConfirm vào <form></form>
    this.formElement.appendChild(this.passwordConfirmInput);
    // Thêm thẻ <button> để đăng nhập vào <form></form>
    this.formElement.appendChild(this.loginButton);

    // Thêm <form></form> vào <div id="app"></div>
    document.querySelector("#app").innerHTML = "";
    document.querySelector("#app").appendChild(this.formElement);
  }
  register() {
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;
    const passwordConfirm = this.passwordConfirmInput.value;
    
    if(username === "" || password === "" || passwordConfirm === "") {
      alert("Please enter all fields");
      return;
    }

    const auth = app.auth; 
    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export default Register;
