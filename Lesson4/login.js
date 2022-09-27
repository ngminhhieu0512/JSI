import Auth from "./auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import app from "./app.js";
import Home from "./home.js";

class Login extends Auth {
  constructor() {
    super();
    this.formElement.onsubmit = (event) => {
      event.preventDefault();
      this.login();
    }
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
    // Thêm thẻ <button> để đăng nhập vào <form></form>
    this.formElement.appendChild(this.loginButton);

    // Thêm <form></form> vào <div id="app"></div>
    document.querySelector("#app").innerHTML = "";
    document.querySelector("#app").appendChild(this.formElement);
  }

  login() {
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;

    if (username === "" || password === "") {
      alert("Please enter all fields");
      return;
    }

    const auth = app.auth;
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        app.changeActiveScreen(new Home());
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Login;
