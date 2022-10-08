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


function showMessage() {
    alert("Thank you for your message!");
}

function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

var searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  var searchValue = e.target.value.toUpperCase();
  console.log(searchValue);
  if (searchValue.length == "") {
    document.getElementById("search-list").style.display = "none";
  }
  if (searchValue.length > 0) {
    document.getElementById("search-list").style.display = "block";
  }
  if (document.getElementById("WITCH'S HAT").innerHTML.includes(searchValue)) {
    document.getElementById("WITCH'S HAT").style.display = "block";
  }
  if (document.getElementById("WITCH'S HAT").innerHTML.includes(searchValue) === false) {
    document.getElementById("WITCH'S HAT").style.display = "none";
  }
  if (document.getElementById("WITCH'S CAPE").innerHTML.includes(searchValue)) {
    document.getElementById("WITCH'S CAPE").style.display = "block";
  }
  if (document.getElementById("WITCH'S CAPE").innerHTML.includes(searchValue) === false) {
    document.getElementById("WITCH'S CAPE").style.display = "none";
  }
  if (document.getElementById("WITCH'S BROOM").innerHTML.includes(searchValue)) {
    document.getElementById("WITCH'S BROOM").style.display = "block";
  }
  if (document.getElementById("WITCH'S BROOM").innerHTML.includes(searchValue) === false) {
    document.getElementById("WITCH'S BROOM").style.display = "none";
  }
  if (document.getElementById("JACK-O'-LANTERN").innerHTML.includes(searchValue)) {
    document.getElementById("JACK-O'-LANTERN").style.display = "block";
  }
  if (document.getElementById("JACK-O'-LANTERN").innerHTML.includes(searchValue) === false) {
    document.getElementById("JACK-O'-LANTERN").style.display = "none";
  }
  if (document.getElementById("GHOST LIGHT BULB").innerHTML.includes(searchValue)) {
    document.getElementById("GHOST LIGHT BULB").style.display = "block";
  }
  if (document.getElementById("GHOST LIGHT BULB").innerHTML.includes(searchValue) === false) {
    document.getElementById("GHOST LIGHT BULB").style.display = "none";
  }
  if (document.getElementById("WALL CLOCK").innerHTML.includes(searchValue)) {
    document.getElementById("WALL CLOCK").style.display = "block";
  }
  if (document.getElementById("WALL CLOCK").innerHTML.includes(searchValue) === false) {
    document.getElementById("WALL CLOCK").style.display = "none";
  }
  if (document.getElementById("STUFFED TOYS").innerHTML.includes(searchValue)) {
    document.getElementById("STUFFED TOYS").style.display = "block";
  }
  if (document.getElementById("STUFFED TOYS").innerHTML.includes(searchValue) === false) {
    document.getElementById("STUFFED TOYS").style.display = "none";
  }
  if (document.getElementById("CANDY BUCKET").innerHTML.includes(searchValue)) {
    document.getElementById("CANDY BUCKET").style.display = "block";
  }
  if (document.getElementById("CANDY BUCKET").innerHTML.includes(searchValue) === false) {
    document.getElementById("CANDY BUCKET").style.display = "none";
  }
  if (document.getElementById("MESSAGE CARD").innerHTML.includes(searchValue)) {
    document.getElementById("MESSAGE CARD").style.display = "block";
  }
  if (document.getElementById("MESSAGE CARD").innerHTML.includes(searchValue) === false) {
    document.getElementById("MESSAGE CARD").style.display = "none";
  }
})

var productsSearch = [
  {
    name: "WITCH'S HAT",
    id: 0
  },
  {
    name: "WITCH'S CAPE",
    id: 1
  },
  {
    name: "WITCH'S BROOM",
    id: 2
  },
  {
    name: "JACK-O'-LANTERN",
    id: 3
  },
  {
    name: "GHOST LIGHT BULB",
    id: 4
  },
  {
    name: "WALL CLOCK",
    id: 5
  },
  {
    name: "STUFFED TOYS",
    id: 6
  },
  {
    name: "CANDY BUCKET",
    id: 7
  },
  {
    name: "MESSAGE CARD",
    id: 8
  },
];

var searchListRender = productsSearch.map((user) => {
  return `
  <a href="../html/detailproduct.html?id=${user.id}"><h2 id="${user.name}">${user.name}</h2></a>
  `;
})
.join("\n");

let searchList = document.getElementById("search-list");
searchList.innerHTML = `
${searchListRender}
`

