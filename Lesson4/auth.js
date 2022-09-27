class Auth {
    formElement; // Thẻ <form>
    usernameInput; // Thẻ <input> có name là username
    passwordInput; // Thẻ <input> có name là password
    loginButton; // Thẻ <button> có name là login
  
    constructor() {
      // Khởi tạo các element cần thiết (1 thẻ form, 2 thẻ input, 1 thẻ button)
      this.formElement = document.createElement("form");
  
      this.usernameInput = document.createElement("input");
      this.usernameInput.setAttribute("type", "text");
      this.usernameInput.setAttribute("placeholder", "Username");
  
      this.passwordInput = document.createElement("input");
      this.passwordInput.setAttribute("type", "password");
      this.passwordInput.setAttribute("placeholder", "Password");
  
      this.loginButton = document.createElement("button");
      this.loginButton.innerHTML = "Login";
    }
  }
  
  export default Auth;
  