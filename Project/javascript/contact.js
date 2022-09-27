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
