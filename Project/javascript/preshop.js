var products = [
  {
    name: "Witch's hat",
    image_url:
      "https://i.pinimg.com/564x/95/84/99/9584997a93ba676f783b9ffaa10076db.jpg",
    description:
      "This super simple free sewing tutorial for a felt witch hat is perfect for Halloween! The embelishment options are endless!",
  },
  {
    name: "Witch's cape",
    image_url:
      "https://i.pinimg.com/564x/87/51/ec/8751ecb2e6fd3f868f5b8665c293a0ac.jpg",
    description:
      "Sumptuous Victorian velvet full length cape lined in satin! Hooded for creating a mysterious look; functional slits in sides of cape.",
  },
  {
    name: "Witch's broom",
    image_url:
      "https://i.pinimg.com/564x/f4/ba/82/f4ba824c042da7758cc0c82256a633ee.jpg",
    description:
      "This Witch's broom is the perfect accessory to our Witch's Cauldron or any of our Halloween suncatchers! Also makes a great gift for that special someone who is obsessed with cleaning!",
  },
  {
    name: "Jack-o'-lantern",
    image_url:
      "https://i.pinimg.com/564x/15/1a/1b/151a1b18682b0b13f6c2afceca4fc2ee.jpg",
    description:
      "Jack O'lantern is the life of the party, LOL! He puts on a big yikes face with his skeleton hands and hilarious teeth; he is trying his hardest to scare.",
  },
  {
    name: "Ghost light bulb",
    image_url:
      "https://i.pinimg.com/564x/a8/23/27/a82327f07ee014d91da80af57b5621fc.jpg",
    description:
      "Create the perfect ambiance for the frightening festivities in your home by decorating with these Ghost light bulb",
  },
  {
    name: "Wall clock",
    image_url:
      "https://i.pinimg.com/564x/07/1d/78/071d789e36c74be34566bc879e2abaf7.jpg",
    description:
      "Happy Halloween Round Wall Clock: Our Halloween Clock design brings the spirit of the holiday into your home with a little black cat sitting in a Jack-o'-lantern",
  },
  {
    name: "Stuffed toys",
    image_url:
      "https://i.pinimg.com/564x/a1/59/06/a15906ac687277f869ad56d5fd0fe671.jpg",
    description:
      "Stuffed animal sewing pattern, easy tutorial & instructions to make cute Scaredy Cat plush toys in 2 sizes. Perfect for Halloween gifts, nursery decor, and cat fans!",
  },
  {
    name: "Candy bucket",
    image_url:
      "https://i.pinimg.com/564x/c2/d7/b9/c2d7b9467d797b9363455a3486e42d55.jpg",
    description:
      "Halloween Pumpkin Buckets: Pumpkin Bucket Orange Glowing Black Halloween Toy Pumpkin Bucket Performance Prop for Halloween Festival Party ",
  },
  {
    name: "Message card",
    image_url:
      "https://i.pinimg.com/564x/e5/81/de/e581def54bb43f921a2634dcf3502c9c.jpg",
    description:
      "Funny Halloween card for the dog lover in your life! Personalize it with your own message printed inside. Hand drawn and printed on heavy weight card stock.",
  },
];

$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 100,
  autoplay: true,
  arrows: true,
  prevArrow:
    "<img class='a-left control-c prev slick-prev' style='position: absolute; top: 50%; left: -50px; cursor: pointer'  src='https://img.icons8.com/ios-glyphs/30/FFFFFF/arrow-pointing-left--v2.png'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' style='position: absolute; top: 50%; right: -50px; cursor: pointer' src='https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-right.png'>",
});

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

function showAccount() {
  var account = document.getElementById("account");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

