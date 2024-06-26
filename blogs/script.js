// navbar section start
// ====================
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

// Navbar active state underline
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.href;

  navLinks.forEach(link => {
      if (link.href === currentUrl) {
          link.classList.add("active");
      }
  });
});

// Read button dropdown
document.addEventListener("DOMContentLoaded", function () {
  let readMoreButton = document.querySelector(".nav-dw-btn");
  let closeArrow = document.querySelector(".close-arrow");
  let openArrow = document.querySelector(".open-arrow");
  let hideLinks = document.querySelector(".nav-hidden-links");

  readMoreButton.addEventListener("click", function () {
    if (hideLinks.style.display === "block") {
      hideLinks.style.display = "none";
      closeArrow.style.display = "block";
      openArrow.style.display = "none";
      readMoreButton.classList.remove("active");
    } else {
      hideLinks.style.display = "block";
      closeArrow.style.display = "none";
      openArrow.style.display = "block";
      readMoreButton.classList.add("active");
    }
  });
});

// navbar section end
// ====================

// Blogs slider
var swiper = new Swiper(".post-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
