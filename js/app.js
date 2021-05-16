// HEADER SCROLL
$(document).scroll(function () {
  var y = $(document).scrollTop(),
    header = $(".header--section");
  if (y > 350) {
    header.addClass("active");
  } else {
    header.removeClass("active");
  }
});
// TESTIMONIAL SLIDER
var myEle = document.getElementById("infoslider");
if (myEle) {
  new Splide("#infoslider", {
    type: "slide",
    loop: false,
    gap: 15,
    arrows: false,
    pagination: false,
    autoplay: true,
    perPage: 1,
    pauseOnHover: true,
  }).mount();
}
// PICTURE SLIDER
var myEle = document.getElementById("picture--slider");
if (myEle) {
  new Splide("#picture--slider", {
    type: "slide",
    loop: false,
    gap: 15,
    arrows: true,
    pagination: false,
    autoplay: true,
    perPage: 2,
    pauseOnHover: true,
  }).mount();
}
// PICTURE SLIDER
var myEle = document.getElementById("logo--slider");
if (myEle) {
  new Splide("#logo--slider", {
    type: "loop",
    loop: true,
    gap: 15,
    arrows: true,
    pagination: false,
    // autoplay: true,
    perPage: 4,
    // pauseOnHover: true,
    breakpoints: {
      768: {
        perPage: 3,
      },
      576: {
        perPage: 2,
      },
    },
  }).mount();
}
// ADD ELE IN MENU DROPDOWN(Mobile)
const nele = document.body.querySelectorAll("#mobile-menu ul li.dropdown");
for (var j = 0; j < nele.length; j++) {
  var mdd = document.createElement("i");
  var mddclass = (mdd.className = "fas fa-chevron-down");
  nele[j].appendChild(mdd, nele[j]);
}
// MOBILE MENU TRIGGER
$("#menubar").on("click", function () {
  $(this).toggleClass("active");
  $("body").toggleClass("hide");
  $("#mobilemenu--section").slideToggle();
});
// MOBILE MENU DROPDOWN
$(".mobilemenu--list ul li.dropdown i").on("click", function (e) {
  // $(this).parent().toggleClass("active");
  $(this).parent().find("ul").slideToggle();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().siblings().find("ul").slideUp();
});
