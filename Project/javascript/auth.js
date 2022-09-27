// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAykWQIfHpaCLQMzWHLvX-T7-AyJB5vRPs",
  authDomain: "final-project-b59b0.firebaseapp.com",
  projectId: "final-project-b59b0",
  storageBucket: "final-project-b59b0.appspot.com",
  messagingSenderId: "583081707789",
  appId: "1:583081707789:web:846588135df24737ac0844"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
window.auth = getAuth(firebase);

var signOutBtn = document.getElementById("sign-out");
signOutBtn.onclick = function () { 
signOut(auth).then(() => {
  window.location.href = "../html/login.html"
}).catch((error) => {
  // An error happened.
});
}