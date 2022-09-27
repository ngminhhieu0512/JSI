function allowBuyNow() {
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked == true) {
    document.getElementById("buynow").style.cursor = "pointer";
    document.getElementById("buynow").style.opacity = "1";
  } else {
    document.getElementById("buynow").style.cursor = "no-drop";
    document.getElementById("buynow").style.opacity = "0.7";
  }
}

function showShare1() {
  document.getElementById("share1").style.display = "block";
}
function hideShare1() {
  document.getElementById("share1").style.display = "none";
}
function showShare2() {
  document.getElementById("share2").style.display = "block";
}
function hideShare2() {
  document.getElementById("share2").style.display = "none";
}
function showShare3() {
  document.getElementById("share3").style.display = "block";
}
function hideShare3() {
  document.getElementById("share3").style.display = "none";
}

// Scroll to top button
toTopButton = document.getElementById("to-top-button");
remind = document.getElementById("remind");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 400) {
    toTopButton.style.display = "block";
  }
  if (document.documentElement.scrollTop < 400) {
    toTopButton.style.display = "none";
  }
  if (document.documentElement.scrollTop < 1000 && document.documentElement.scrollTop > 500) {
    remind.style.display = "block";
  }
  if (document.documentElement.scrollTop > 1000 || document.documentElement.scrollTop < 500) {
    remind.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function changeImage(subimg) {
  var mainImage = document.getElementById("product-img");
  mainImage.src = subimg.src;
}