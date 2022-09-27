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



