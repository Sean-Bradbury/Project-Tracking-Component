document.querySelector(".hamburger-container").addEventListener("click", openNav);

function openNav() {
  var element = document.querySelector(".nav-links");
  var hamburger = document.querySelector(".hamburger-container");
  element.classList.toggle("nav-links-mobile");
  hamburger.classList.toggle("hamburger-container-close");
}