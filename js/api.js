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
