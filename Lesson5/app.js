var quantity = 1;
document.getElementById("quantity").innerHTML = quantity;
function increase() {
  quantity = quantity + 1;
  price = 10000 * quantity;
  document.getElementById("quantity").innerHTML = quantity;
}
function decrease() {
  if (quantity > 1) {
    quantity = quantity - 1;
    document.getElementById("quantity").innerHTML = quantity;
  }
}


var listProduct = [];
function addToCartHB() {
  alert("You added " + quantity + " Unpholstered Simple PH-1 to cart");
  var ups = {
    name: "Unpholstered Simple PH-1",
    number: quantity,
    money: price,
  };
  localStorage.setItem("Unpholstered Simple PH-1", JSON.stringify(ups));
  location.reload();
}

if (localStorage.getItem("Unpholstered Simple PH-1")) {
  var upscart = localStorage.getItem("Unpholstered Simple PH-1");
  var upCart = JSON.parse(upscart);
  listProduct.push(upCart);
}

localStorage.setItem("OrderList", JSON.stringify(listProduct));

var numberCart = 0;
if(listProduct.length > 0){ 
for (let i = 0; i < listProduct.length; i++) {
  numberCart = numberCart + listProduct[i].number;
  document.getElementById("showNumberCart").innerHTML = numberCart;
}
}if(listProduct.number > 99){
  document.getElementById("showNumberCart").innerHTML = "m";
}

