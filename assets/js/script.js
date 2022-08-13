'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });



// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

  whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });

}

function hideArrow(){
  var x = document.getElementById("shoutouts");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("shoutouts").style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 1150) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});
//Theme Start
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
//Theme end