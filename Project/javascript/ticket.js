var quantity = 1;
var famPrice = 50;
if (quantity == "1") {
  document.getElementById("total").innerHTML = "50.000 VND";
}
document.getElementById("quantity-number").innerHTML = quantity;
function increase() {
  quantity = quantity + 1;
  document.getElementById("quantity-number").innerHTML = quantity;
  if (quantity == "1") {
    document.getElementById("total").innerHTML = "50.000 VND";
    famPrice = 50;
  }
  if (quantity == "2") {
    document.getElementById("total").innerHTML = "90.000 VND";
    famPrice = 45;
  }
  if (quantity == "3") {
    document.getElementById("total").innerHTML = "120.000 VND";
    famPrice = 40;
  }
  if (quantity > "3") {
    famPrice = 35;
    document.getElementById("total").innerHTML =
      famPrice * quantity + ".000 VND";
  }
}
function decrease() {
  if (quantity > 1) {
    quantity = quantity - 1;
    document.getElementById("quantity-number").innerHTML = quantity;
  }
  if (quantity == "1") {
    document.getElementById("total").innerHTML = "50.000 VND";
    famPrice = 50;
  }
  if (quantity == "2") {
    document.getElementById("total").innerHTML = "90.000 VND";
    famPrice = 45;
  }
  if (quantity == "3") {
    document.getElementById("total").innerHTML = "120.000 VND";
    famPrice = 40;
  }
  if (quantity > "3") {
    famPrice = 35;
    document.getElementById("total").innerHTML =
      famPrice * quantity + ".000 VND";
  }
};

function addToCart() {
  var ticket = {
    title: "Ticket",
    number: quantity,
    money: famPrice * quantity,
  };
  if (localStorage.getItem("Ticket") === null && ticket.title == "Ticket") {
    localStorage.setItem(ticket.title, JSON.stringify(ticket));
    alert("You added " + quantity + " " + ticket.title + "(s) to cart");
    location.reload();
    return;
  }
  if (localStorage.getItem("Ticket") && ticket.title == "Ticket") {
    var dataTK = JSON.parse(localStorage.getItem("Ticket"));
    var ticketAdd = {
      title: "Ticket",
      number: dataTK.number + ticket.number,
      money: dataTK.money + ticket.money,
    };
    localStorage.setItem("Ticket", JSON.stringify(ticketAdd));
    alert("You added " + quantity + " " + ticket.title + "(s) to cart");
    location.reload();
  }
};

var listProduct = JSON.parse(localStorage.getItem("List Product"));
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

