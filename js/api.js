const hamburger = $(".hamburger");
const navMenu = $(".nav-menu");
const navLink = $(".nav-link");

// hamburger.addEventListener("click", mobileMenu);
hamburger.on("click", mobileMenu);

function mobileMenu() {
  hamburger.toggleClass("active");
  navMenu.toggleClass("active");
  if ($(".nav-menu.active").length > 0) {
    $(".header").attr("style", "background-color: #2d2d35");
  } else {
    $(".header").attr("style", "background-color: transparent");
  }
}

$(window).resize(function () {
  if ($(window).width() > 769) {
    $(".header").attr("style", "background-color: transparent");
    closeMenu();
  }
});

navLink.on("click", closeMenu);

function closeMenu() {
  hamburger.removeClass("active");
  navMenu.removeClass("active");
}

/* function that is responsible for activating navigation menu items */
function makeLiActive() {
  $(this).closest("li").addClass("active").siblings().removeClass("active");
}

$("header .nav-item").click(makeLiActive);

/* Truncate text */
function showMore(id) {
  document.getElementById(id + "Overflow").className = "";
  document.getElementById(id + "MoreLink").className = "hidden";
  document.getElementById(id + "LessLink").className = "";
}

function showLess(id) {
  document.getElementById(id + "Overflow").className = "hidden";
  document.getElementById(id + "MoreLink").className = "";
  document.getElementById(id + "LessLink").className = "hidden";
}

var len = 147;
var truncate = $("#truncate");
if (truncate.length > 0) {
  for (var i = 0; i < truncate.length; i++) {
    var fullText = truncate[i].innerHTML;
    if (fullText.length > len) {
      var trunc = fullText.substring(0, len).replace(/\w+$/, "");
      var remainder = "";
      var id = truncate[i].id;
      remainder = fullText.substring(len, fullText.length);
      truncate[i].innerHTML =
        "<span>" +
        trunc +
        '<span class="hidden" id="' +
        id +
        'Overflow">' +
        remainder +
        '</span></span>&nbsp;<a id="' +
        id +
        'MoreLink" href="#!" onclick="showMore(\'' +
        id +
        '\');"><img src="./img/arrow-down.png" alt="Arrow down" class="main-arrow" /></a><a class="hidden" href="#!" id="' +
        id +
        'LessLink" onclick="showLess(\'' +
        id +
        "');\"><img src='./img/arrow-down.png' alt='Arrow down' class='main-arrow arrow-transform' /></a>";
    }
  }
}

new Splide(".splide", {
  type: "loop",
  perPage: 1,
  // fixedWidth: 730,
  autoWidth: true,
  fixedHeight: 220,
  gap: 70,
  padding: {
    right: "8rem",
    left: "8rem",
  },
  focus: "center",
  arrowPath: `m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z`,
}).mount();

$("#arrow-down").on("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});
