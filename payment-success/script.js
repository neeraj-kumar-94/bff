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