var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  document
    .querySelector(".navbar__mobile")
    .classList.toggle("navbar__mobile--visible");
});
