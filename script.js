
// how it works section card slider
var swiper = new Swiper(".how-it-works-card-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// tail wagingly section

var swiper = new Swiper(".tail-wagingly-slider-cont", {
  spaceBetween: 30,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Anchor button
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    // Your custom code here
    console.log("Button clicked");
  });
});

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

// accordion
const ourItemDiv = document.getElementsByClassName("acc-box");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// Initially hide all close icons
for (let i = 0; i < closeIcon.length; i++) {
  closeIcon[i].style.display = "none";
}

for (let i = 0; i < ourItemDiv.length; i++) {
  ourItemDiv[i].addEventListener("click", () => {
    // First, close all items
    for (let j = 0; j < ourItemDiv.length; j++) {
      if (j !== i) {
        // Don't toggle the clicked item
        ourItemDiv[j].classList.remove("active");
        closeIcon[j].style.display = "none";
        openIcon[j].style.display = "block";
      }
    }

    // Then, toggle the clicked item
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}

// navbar
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('humburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const sidebar = document.querySelector('.mobile-sidebar');

  menuIcon.addEventListener('click', function () {
      sidebar.style.left = '0';
      closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function () {
      sidebar.style.left = '-310px';
      closeIcon.style.display = 'none';
  });
});

