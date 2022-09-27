// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhdw7NYmn5oKb8xI_z-EWO7brwWbU6uVI",
    authDomain: "spck-f1a02.firebaseapp.com",
    projectId: "spck-f1a02",
    storageBucket: "spck-f1a02.appspot.com",
    messagingSenderId: "316762566527",
    appId: "1:316762566527:web:acfb63e3a172864dcf344a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
window.auth = getAuth(firebase);