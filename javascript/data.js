import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const userID = JSON.parse(localStorage.getItem("User ID"));
const database = getDatabase();
const dbRef = ref(database);

get(child(dbRef, `cart/${userID}`)).then((snapshot) => {
  if (snapshot.exists()) {
    var dataFromRD = snapshot.val();
    localStorage.setItem("List Product", JSON.stringify(dataFromRD));
    if(document.getElementById("total-quantity-home").textContent == "0") {
      window.location.reload()
    }
  } else {
    console.log("No data available");
  }
});





