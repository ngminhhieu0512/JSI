var listProduct = JSON.parse(localStorage.getItem("List Product"));

let listProductRender = listProduct
  .map((user) => {
    return `<tr>
    <td>${user.title}</td>
    <td>${user.number}</td>
    <td>${user.money}.000</td>
  </tr>`;
  })
  .join("\n");

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

var billInfo = JSON.parse(localStorage.getItem("Customer Info"));
console.log(billInfo.lname);
document.getElementById("name").innerHTML =
  "Your name: " + billInfo.lname + " " + billInfo.fname;
document.getElementById("phone").innerHTML = "Phone number: " + billInfo.phone;
document.getElementById("address").innerHTML = "Address: " + billInfo.address;

function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

function deleleStorage() {
    alert("Thank you!");
    localStorage.clear();
    window.location.href = "../html/home.html"
}
