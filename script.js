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

// how it works section card slider
// var swiper = new Swiper(".how-it-works-card-slider", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

let contentNum = 1;
function controler(x) {
  if (window.innerWidth <= 576) {
    contentSlide((contentNum += x));
  }
}
function currentSlide(n) {
  if (window.innerWidth <= 576) {
    contentSlide((contentNum = n));
  }
}

function contentSlide(n) {
  let slides = document.getElementsByClassName("h-it-w-card");
  let dots = document.getElementsByClassName("dot");

  if (window.innerWidth > 576) {
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    return;
  }
  if (n > slides.length) {
    contentNum = 1;
  }
  if (n < 1) {
    contentNum = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[contentNum - 1].style.display = "block";
  dots[contentNum - 1].className += " active";
}

// Initialize the slider
contentSlide(contentNum);

window.addEventListener("resize", function () {
  contentSlide(contentNum);
});


// ========================
// tail wagingly section
// ========================
let postion = 1;
function controle(x) {
  if (window.innerWidth <= 576) {
    melaSlide((postion += x));
  }
}
function slieDot(n) {
  if (window.innerWidth <= 576) {
    melaSlide((postion = n));
  }
}

function melaSlide(n) {
  let meals = document.getElementsByClassName("tail-wagingly-card");
  let pagination = document.getElementsByClassName("circyle");

  if (window.innerWidth > 576) {
    
    for (let i = 0; i < meals.length; i++) {
      meals[i].style.display = "block";
    }
    return;
  }
  if (n > meals.length) {
    postion = 1;
  }
  if (n < 1) {
    postion = meals.length;
  }
  for (let i = 0; i < meals.length; i++) {
    meals[i].style.display = "none";
  }
  for (let i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  meals[postion - 1].style.display = "block";
  pagination[postion - 1].className += " active";
}

melaSlide(postion);

window.addEventListener("resize", function () {
  melaSlide(postion);
});

// Anchor button
// document.querySelectorAll(".button").forEach((button) => {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     // Your custom code here
//     console.log("Button clicked");
//   });
// });

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
