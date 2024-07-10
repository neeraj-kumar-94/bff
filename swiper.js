// testimonial section
var swiper = new Swiper(".testimonial-slide-inner-sec", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1570: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// product image slide
var swiper = new Swiper(".product-image-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
