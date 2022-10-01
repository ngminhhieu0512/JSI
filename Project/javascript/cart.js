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

var products = [
  {
    name: "Witch's hat",
    image_url:
      "https://i.pinimg.com/564x/95/84/99/9584997a93ba676f783b9ffaa10076db.jpg",
    id: 0,
    description:
      "This super simple free sewing tutorial for a felt witch hat is perfect for Halloween! The embelishment options are endless!",
  },
  {
    name: "Witch's cape",
    image_url:
      "https://i.pinimg.com/564x/87/51/ec/8751ecb2e6fd3f868f5b8665c293a0ac.jpg",
    id: 1,
    description:
      "Sumptuous Victorian velvet full length cape lined in satin! Hooded for creating a mysterious look; functional slits in sides of cape.",
  },
  {
    name: "Witch's broom",
    image_url:
      "https://i.pinimg.com/564x/f4/ba/82/f4ba824c042da7758cc0c82256a633ee.jpg",
    id: 2,
    description:
      "This Witch's broom is the perfect accessory to our Witch's Cauldron or any of our Halloween suncatchers! Also makes a great gift for that special someone who is obsessed with cleaning!",
  },
  {
    name: "Jack-o'-lantern",
    image_url:
      "https://i.pinimg.com/564x/15/1a/1b/151a1b18682b0b13f6c2afceca4fc2ee.jpg",
    id: 3,
    description:
      "Jack O'lantern is the life of the party, LOL! He puts on a big yikes face with his skeleton hands and hilarious teeth; he is trying his hardest to scare.",
  },
  {
    name: "Ghost light bulb",
    image_url:
      "https://i.pinimg.com/564x/a8/23/27/a82327f07ee014d91da80af57b5621fc.jpg",
    id: 4,
    description:
      "Create the perfect ambiance for the frightening festivities in your home by decorating with these Ghost light bulb",
  },
  {
    name: "Wall clock",
    image_url:
      "https://i.pinimg.com/564x/07/1d/78/071d789e36c74be34566bc879e2abaf7.jpg",
    id: 5,
    description:
      "Happy Halloween Round Wall Clock: Our Halloween Clock design brings the spirit of the holiday into your home with a little black cat sitting in a Jack-o'-lantern",
  },
  {
    name: "Stuffed toys",
    image_url:
      "https://i.pinimg.com/564x/a1/59/06/a15906ac687277f869ad56d5fd0fe671.jpg",
    id: 6,
    description:
      "Stuffed animal sewing pattern, easy tutorial & instructions to make cute Scaredy Cat plush toys in 2 sizes. Perfect for Halloween gifts, nursery decor, and cat fans!",
  },
  {
    name: "Candy bucket",
    image_url:
      "https://i.pinimg.com/564x/c2/d7/b9/c2d7b9467d797b9363455a3486e42d55.jpg",
    id: 7,
    description:
      "Halloween Pumpkin Buckets: Pumpkin Bucket Orange Glowing Black Halloween Toy Pumpkin Bucket Performance Prop for Halloween Festival Party ",
  },
  {
    name: "Message card",
    image_url:
      "https://i.pinimg.com/564x/e5/81/de/e581def54bb43f921a2634dcf3502c9c.jpg",
    id: 8,
    description:
      "Funny Halloween card for the dog lover in your life! Personalize it with your own message printed inside. Hand drawn and printed on heavy weight card stock.",
  },
];

localStorage.setItem("Products", JSON.stringify(products));

var costumeProduct = [
  {
    name: "Witch's hat",
    image_url:
      "https://i.pinimg.com/564x/95/84/99/9584997a93ba676f783b9ffaa10076db.jpg",
    id: "0",
  },
  {
    name: "Witch's cape",
    image_url:
      "https://i.pinimg.com/564x/87/51/ec/8751ecb2e6fd3f868f5b8665c293a0ac.jpg",
    id: "1",
  },
  {
    name: "Witch's broom",
    image_url:
      "https://i.pinimg.com/564x/f4/ba/82/f4ba824c042da7758cc0c82256a633ee.jpg",
    id: "2",
  },
];
var decorationProduct = [
  {
    name: "Jack-o'-lantern",
    image_url:
      "https://i.pinimg.com/564x/15/1a/1b/151a1b18682b0b13f6c2afceca4fc2ee.jpg",
    id: "3",
  },
  {
    name: "Ghost light bulb",
    image_url:
      "https://i.pinimg.com/564x/a8/23/27/a82327f07ee014d91da80af57b5621fc.jpg",
    id: "4",
  },
  {
    name: "Wall clock",
    image_url:
      "https://i.pinimg.com/564x/07/1d/78/071d789e36c74be34566bc879e2abaf7.jpg",
    id: "5",
  },
];
var toyProduct = [
  {
    name: "Stuffed toys",
    image_url:
      "https://i.pinimg.com/564x/a1/59/06/a15906ac687277f869ad56d5fd0fe671.jpg",
    id: "6",
  },
  {
    name: "Candy bucket",
    image_url:
      "https://i.pinimg.com/564x/c2/d7/b9/c2d7b9467d797b9363455a3486e42d55.jpg",
    id: "7",
  },
  {
    name: "Message card",
    image_url:
      "https://i.pinimg.com/564x/e5/81/de/e581def54bb43f921a2634dcf3502c9c.jpg",
    id: "8",
  },
];

if (
  localStorage.getItem("Shop - Costume") === null &&
  localStorage.getItem("Shop - Decoration") === null &&
  localStorage.getItem("Shop - Toy") === null
) {
  localStorage.setItem("Shop - Costume", JSON.stringify(costumeProduct));
  localStorage.setItem("Shop - Decoration", JSON.stringify(decorationProduct));
  localStorage.setItem("Shop - Toy", JSON.stringify(toyProduct));
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

