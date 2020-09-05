
/* Toggle */

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });

  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
});

/* Content show & hide */

var li_elements = document.querySelectorAll(".nav .nav__links .nav__link");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "about") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "portfolio") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "social-media") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "blog") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "contact") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

