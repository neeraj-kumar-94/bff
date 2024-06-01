
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

    for(let j = 0; j < allTabHideDetails.length; j++){
      allTabHideDetails[j].style.display = "none";
    }

    for(let k = 0; k < allButtons.length; k++){
      allButtons[k].classList.remove("active");
    }

    allBtnId.style.display = "block";
    this.classList.add("active");

  })
}

document.querySelector(".tab-btn").click();


// product image slide
var swiper = new Swiper(".product-image-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, 
});


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




// navbar
// ======
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



// accordion section
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