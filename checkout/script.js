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

//  cross icon clear input
const clearButton = document.querySelector(".clear-card-name");
const cardNameInput = document.getElementById("name-on-card");

clearButton.addEventListener("click", function () {
  cardNameInput.value = ""; // Input field ko empty karne ke liye
});

// Dropdown top

// document.addEventListener("DOMContentLoaded", function () {
//   let downArrow = document.querySelector(".dropdown-close");
//   let openArrow = document.querySelector(".dropdown-open");
//   let hideProducts = document.querySelector(".some-product-section");

//   downArrow.addEventListener("click", function () {
//     hideProducts.style.display = "block";
//     openArrow.style.display = "block";
//     downArrow.style.display = "none";
//   });

//   openArrow.addEventListener("click", function () {
//     hideProducts.style.display = "none";
//     openArrow.style.display = "none";
//     downArrow.style.display = "block";
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
    let downArrow = document.querySelector(".dropdown-close");
    let openArrow = document.querySelector(".dropdown-open");
    let hideProducts = document.querySelector(".some-product-section");

    downArrow.addEventListener("click", function () {
      hideProducts.style.display = "block";
      openArrow.style.display = "block";
      downArrow.style.display = "none";
    });

    openArrow.addEventListener("click", function () {
      hideProducts.style.display = "none";
      openArrow.style.display = "none";
      downArrow.style.display = "block";
    });

    function checkScreenSize() {
      if (window.innerWidth >= 576) {
        // Desktop view
        hideProducts.style.display = "block";
        downArrow.style.display = "none";
        openArrow.style.display = "none";
      } else {
        // Mobile view
        hideProducts.style.display = "none";
        downArrow.style.display = "block";
        openArrow.style.display = "none";
      }
    }

    checkScreenSize(); // Check screen size on initial load

    window.addEventListener('resize', checkScreenSize); // Check screen size on resize
  });
