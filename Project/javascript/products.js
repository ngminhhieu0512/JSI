const showProducts = JSON.parse(localStorage.getItem("Products"));
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const productDetail = showProducts[params.id];
  document.getElementById("nav-product-name").textContent = productDetail.name;
  document.getElementById("product-img").src = productDetail.image_url;
  document.getElementById("product-title").textContent = productDetail.name;
  document.getElementById("product-description").textContent = productDetail.description;

var quantity = 1;
var price = 10;
document.getElementById("quantity-number").innerHTML = quantity;
document.getElementById("total").innerHTML = price + ".000 VND";
function increase() {
  quantity = quantity + 1;
  document.getElementById("quantity-number").innerHTML = quantity;
  document.getElementById("total").innerHTML = quantity * 10 + ".000 VND";
}
function decrease() {
  if (quantity > 1) {
    quantity = quantity - 1;
    document.getElementById("quantity-number").innerHTML = quantity;
    document.getElementById("total").innerHTML = quantity * 10 + ".000 VND";
  }
}

var listProduct = [];

function addToCart() {
  var product =
    {
    title: productDetail.name,
    number: quantity,
    money: quantity * 10,
  }
  localStorage.setItem(product.title, JSON.stringify(product));
  alert("You added " + quantity + " " + product.title + "(s) to cart");
  location.reload();
}

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



