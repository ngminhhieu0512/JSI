// Movies
var movies = document.getElementById("movies");
var show = document.getElementById("show-detail-1");
var hide = document.getElementById("hide-detail-1");

show.addEventListener("click", () => {
  movies.style.display = "block";
});
hide.addEventListener("click", () => {
  movies.style.display = "none";
});

// Carve
var pumpkinCarve = document.getElementById("pumpkin-carving");
var show2 = document.getElementById("show-detail-2");
var hide2 = document.getElementById("hide-detail-2");

show2.addEventListener("click", () => {
  pumpkinCarve.style.display = "block";
});
hide2.addEventListener("click", () => {
  pumpkinCarve.style.display = "none";
});

// Dining
var dining = document.getElementById("dining");
var show3 = document.getElementById("show-detail-3");
var hide3 = document.getElementById("hide-detail-3");

show3.addEventListener("click", () => {
  dining.style.display = "block";
});
hide3.addEventListener("click", () => {
  dining.style.display = "none";
});

// Dance
var dance = document.getElementById("dance");
var show4 = document.getElementById("show-detail-4");
var hide4 = document.getElementById("hide-detail-4");

show4.addEventListener("click", () => {
  dance.style.display = "block";
});
hide4.addEventListener("click", () => {
  dance.style.display = "none";
});

// Art
var art = document.getElementById("art");
var show5 = document.getElementById("show-detail-5");
var hide5 = document.getElementById("hide-detail-5");

show5.addEventListener("click", () => {
  art.style.display = "block";
});
hide5.addEventListener("click", () => {
  art.style.display = "none";
});

// Quiz
var quiz = document.getElementById("quiz");
var show6 = document.getElementById("show-detail-6");
var hide6 = document.getElementById("hide-detail-6");

show6.addEventListener("click", () => {
  quiz.style.display = "block";
});
hide6.addEventListener("click", () => {
  quiz.style.display = "none";
});

var listProduct = [];

if (localStorage.getItem("Witch's hat")) {
  var takeProductWH = JSON.parse(localStorage.getItem("Witch's hat"));
  listProduct.push(takeProductWH);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Witch's cape")) {
  var takeProductWC = JSON.parse(localStorage.getItem("Witch's cape"));
  listProduct.push(takeProductWC);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Witch's broom")) {
  var takeProductWB = JSON.parse(localStorage.getItem("Witch's broom"));
  listProduct.push(takeProductWB);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Jack-o'-lantern")) {
  var takeProductJL = JSON.parse(localStorage.getItem("Jack-o'-lantern"));
  listProduct.push(takeProductJL);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Ghost light bulb")) {
  var takeProductGL = JSON.parse(localStorage.getItem("Ghost light bulb"));
  listProduct.push(takeProductGL);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Wall clock")) {
  var takeProductWC = JSON.parse(localStorage.getItem("Wall clock"));
  listProduct.push(takeProductWC);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Stuffed toys")) {
  var takeProductST = JSON.parse(localStorage.getItem("Stuffed toys"));
  listProduct.push(takeProductST);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Candy bucket")) {
  var takeProductCB = JSON.parse(localStorage.getItem("Candy bucket"));
  listProduct.push(takeProductCB);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Message card")) {
  var takeProductMC = JSON.parse(localStorage.getItem("Message card"));
  listProduct.push(takeProductMC);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}
if (localStorage.getItem("Ticket")) {
  var takeProductTK = JSON.parse(localStorage.getItem("Ticket"));
  listProduct.push(takeProductTK);
  localStorage.setItem("List Product", JSON.stringify(listProduct));
}

var totalQuantity = 0;
for (let i = 0; i < listProduct.length; i++) {
  totalQuantity = totalQuantity + listProduct[i].number;
}
if (totalQuantity > 99) {
  document.getElementById("total-quantity").innerHTML = "m";
} else {
  document.getElementById("total-quantity").innerHTML = totalQuantity;
}


function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}
