var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
    .querySelector(".navbar-mobile")
    .classList.toggle("navbar-mobile--visible");
});