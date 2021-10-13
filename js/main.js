var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  document
    .querySelector(".navbar-mobile")
    .classList.toggle("navbar-mobile--visible");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 35,
  loopFillGroupWithBlank: true,
  setWrapperSize: true,

  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".reviews-btn-next",
    prevEl: ".reviews-btn-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  }
});
