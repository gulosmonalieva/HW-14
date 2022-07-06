const toggle = document.querySelector(".toggle-img");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", function () {
  menu.classList.toggle("menu-show");
});
