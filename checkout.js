//  cross icon clear input
const clearButton = document.querySelector(".clear-card-name");
const cardNameInput = document.getElementById("name-on-card");

clearButton.addEventListener("click", function () {
  cardNameInput.value = ""; 
});

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

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
  });