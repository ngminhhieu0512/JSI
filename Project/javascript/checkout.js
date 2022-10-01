var listProduct = JSON.parse(localStorage.getItem("List Product"));

let listProductRender = listProduct.map((user) => {
  return `<tr>
  <td>${user.title}</td>
  <td>${user.number}</td>
  <td>${user.money}.000</td>
</tr>`
}).join("\n");

let table = document.getElementById("table");
table.innerHTML = `
<thead>
<tr>
  <th>Product</th>
  <th>Quantity</th>
  <th>Price</th>
</tr>
</thead>
${listProductRender}`;

var total = 0;
function totalPrice(listProduct) {
    for (let i = 0; i < listProduct.length; i++) {
        total = total + listProduct[i].money;
        document.getElementById("total-price").innerHTML = total + ".000 VND";
    }
}
totalPrice(listProduct);

function saveInfo() {
    var firstName = document.forms["information"]["first-name"].value;
    var lastName = document.forms["information"]["last-name"].value;
    var phn = document.forms["information"]["phone-number"].value;
    var ads = document.forms["information"]["address"].value;
    var promoCode = document.forms["information"]["promo-code"].value;

    var infoCustomer = {
      fname: firstName,
      lname: lastName,
      phone: phn,
      address: ads,
      promo: promoCode,
    }
    localStorage.setItem("Customer Info", JSON.stringify(infoCustomer));
}
if(localStorage.getItem("Customer Info")) {
  var billInfo = JSON.parse(localStorage.getItem("Customer Info"));
  document.forms["information"]["first-name"].value = billInfo.fname;
  document.forms["information"]["last-name"].value = billInfo.lname;
  document.forms["information"]["phone-number"].value = billInfo.phone;
  document.forms["information"]["address"].value = billInfo.address;
  document.forms["information"]["promo-code"].value = billInfo.promo;
  document.getElementById("gotobill").style.display = "flex";
} 
if (localStorage.getItem("Customer Info") === null) {
  document.getElementById("gotobill").style.display = "none";
}

function changePage() {
  window.location.href = "../html/detailproduct.html";
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



