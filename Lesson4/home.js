import app from "./app.js";
import { sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

class Home {
  constructor() {
    this.signOutBtn = document.createElement("button");
    this.signOutBtn.textContent = "Log out";

    this.signOutBtn.onclick = function () {
        const auth = app.auth;
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
            console.log(error);
          // An error happened.
        });
        
    }
  }

  render() {
    document.querySelector("#app").innerHTML = "";
    document.querySelector("#app").innerHTML = "Hello " + app.user.email;

    if (app.user.emailVerified === false) {
      document
        .querySelector("#app")
        .insertAdjacentHTML(
          "beforeend",
          "<h1 style='color: red'>Please verify your email</h1>"
        );

      const auth = app.auth;
      sendEmailVerification(auth.currentUser).then(() => {
        alert("Email verification sent!");
      });
    }

    document.querySelector("#app").appendChild(this.signOutBtn);
  }
}

export default Home;
