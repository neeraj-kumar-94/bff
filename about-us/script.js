// navbar
// navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("humburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const sidebar = document.querySelector(".mobile-sidebar");

  menuIcon.addEventListener("click", function () {
    sidebar.style.left = "0";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    sidebar.style.left = "-310px";
    closeIcon.style.display = "none";
  });
});

// Team member cards
// JavaScript part
var swiper;

function initSwiper() {
  if (window.innerWidth < 576) {
    if (!swiper) {
      swiper = new Swiper(".team-cards-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}

// Initialize Swiper on load
initSwiper();

// Reinitialize Swiper on resize
window.addEventListener('resize', initSwiper);