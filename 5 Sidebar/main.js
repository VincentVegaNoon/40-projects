const hamburger = document.querySelector(".hamburger_menu");
const navbar = document.querySelector(".navbar");
const closeHamburger = document.querySelector(".fa-solid, .fa-xmark");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closeHamburger.addEventListener("click", () => {
  navbar.classList.remove("active");
});
