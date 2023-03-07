const hamburger = document.querySelector(".menu__hamburger");
const menuHeader = document.querySelector(".nav__list");

hamburger.onclick = function () {
  document.body.classList.toggle("lock");
  hamburger.classList.toggle("active");
  menuHeader.classList.toggle("active");
}


menuHeader.onclick = function () {
  document.body.classList.toggle("lock");
  hamburger.classList.remove("active");
  menuHeader.classList.remove("active");
}