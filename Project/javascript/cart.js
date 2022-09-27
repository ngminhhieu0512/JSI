var listProduct = JSON.parse(localStorage.getItem("List Product"));

if (localStorage.getItem("List Product") === null || listProduct.length == 0) {
  document.getElementById("remind").innerHTML = "Your cart is curently empty.";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("table").style.display = "none";
}

let listProductRender = listProduct
  .map((item) => {
    return `<tr id="table-row">
    <td id="order-name">${item.title}</td>
    <td>${item.number}</td>
    <td>${item.money}.000 VND</td>
    <td><button id="${item.title}" onclick="removeItem(this)">Remove</button></td>
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
    <th>Action</th>
  </tr>
  </thead>
${listProductRender}`;

var total = 0;
for (let i = 0; i < listProduct.length; i++) {
  total = total + listProduct[i].money;
  document.getElementById("total").innerHTML = "Total: " + total + ".000 VND";
}

function removeItem(removeBtn) {
  for (let i = 0; i < listProduct.length; i++) {
    if (removeBtn.id == listProduct[i].title) {
      listProduct.splice(i, 1);
      localStorage.removeItem(removeBtn.id)
      localStorage.setItem("List Product", JSON.stringify(listProduct));
    }
  }
  location.reload();
}

function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

