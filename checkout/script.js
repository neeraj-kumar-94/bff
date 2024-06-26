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
