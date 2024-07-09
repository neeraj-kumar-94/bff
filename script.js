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
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
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

// accordion
// =============
const ourItemDiv = document.getElementsByClassName("acc-box");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// Initially hide all close icons
for (let i = 0; i < closeIcon.length; i++) {
  closeIcon[i].style.display = "none";
}

for (let i = 0; i < ourItemDiv.length; i++) {
  ourItemDiv[i].addEventListener("click", () => {
    console.log("clicked");

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

//================================
//   HOME PAGE JavaScript
//================================

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

//================================
//   PRODUCT INFROMATION JAVASCRIPT
//================================

//   CART PAGE JAVASCRIPT
// =======================
document.addEventListener("DOMContentLoaded", function () {
  let invisibleText = document.getElementById("invisible-text");
  invisibleText.style.display = "none";
});

const moreLess = function () {
  let invisibleText = document.getElementById("invisible-text");
  let btnText = document.getElementById("toggle-btn");

  if (invisibleText.style.display !== "none") {
    invisibleText.style.display = "none";
    btnText.innerHTML = "Show More";
  } else {
    invisibleText.style.display = "inline";
    btnText.innerHTML = "Show Less";
  }
};


// =======================
//  product tabs tabs
// =======================
let tabButtons = document.querySelectorAll(".tab-btn");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    let tabBtnId = this.dataset.tabs;
    let allBtnId = document.getElementById(tabBtnId);
    let allTabHideDetails = document.querySelectorAll(".tab-container");
    let allButtons = document.querySelectorAll(".tab-btn");

    for (let j = 0; j < allTabHideDetails.length; j++) {
      allTabHideDetails[j].style.display = "none";
    }

    for (let k = 0; k < allButtons.length; k++) {
      allButtons[k].classList.remove("active");
    }

    allBtnId.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tab-btn").click();


// product information accordion
// =============================
const productDetail = document.getElementsByClassName("detail-box");
const iconOpen = document.getElementsByClassName("openIcon");
const iconClose = document.getElementsByClassName("closeIcon");

for (let i = 0; i < iconClose.length; i++) {
  iconClose[i].style.display = "none";
}

for (let i = 0; i < productDetail.length; i++) {
  productDetail[i].addEventListener("click", () => {
    for (let j = 0; j < productDetail.length; j++) {
      if (j !== i) {
        productDetail[j].classList.remove("active");
        iconClose[j].style.display = "none";
        iconOpen[j].style.display = "block";
      }
    }

    const result = productDetail[i].classList.toggle("active");

    if (result) {
      iconClose[i].style.display = "block";
      iconOpen[i].style.display = "none";
    } else {
      iconClose[i].style.display = "none";
      iconOpen[i].style.display = "block";
    }
  });
}


// CHECKOUT PAGE
// ===================
