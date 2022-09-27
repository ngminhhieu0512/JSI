import Login from "./login.js";
import Register from "./register.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import Home from "./home.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3AHxy4fJXhQMGHIcSFJLyeUz6DGoZCVc",
  authDomain: "lesson6-f193f.firebaseapp.com",
  projectId: "lesson6-f193f",
  storageBucket: "lesson6-f193f.appspot.com",
  messagingSenderId: "289769649174",
  appId: "1:289769649174:web:41e314b1a82c5539ee7137"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

class App {
  activeScreen; // Màn hình hiện tại (login/register)
  container; // Container chứa màn hình hiện tại
  auth;
  user;

  constructor(container) {
    this.container = container;
    this.auth = getAuth(firebase);
    this.createObserver();
  }

  /**
   * Chuyển đổi giữa các màn hình đăng nhập và đăng ký
   *
   * @param screen [screen description]
   */
  changeActiveScreen(screen) {
    this.activeScreen = screen;
    this.activeScreen.render();
  }

  createObserver() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.user = user;
        this.changeActiveScreen(new Home());
        // ...
      } else {
        // User is signed out
        // ...
        this.changeActiveScreen(new Login());
      }
    });
  }
}

const container = document.querySelector("#app");
const app = new App(container);

const login = new Login();
const register = new Register();

const loginButton = document.getElementById("login-button");
loginButton.onclick = function (event) {
  event.preventDefault();
  app.changeActiveScreen(login);
};

const registerButton = document.getElementById("register-button");
registerButton.onclick = function (event) {
  event.preventDefault();
  app.changeActiveScreen(register);
};

export default app;