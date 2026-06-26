const hamburger = document.querySelector(".hamburger");
const hamburgerX = document.querySelector(".hamburgerX");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("nav-open");
});


// console