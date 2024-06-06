// navbar
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



// show more button
document.addEventListener("DOMContentLoaded", function() {
  let invisibleText = document.getElementById("invisible-text");
  invisibleText.style.display = "none"; 
});

const moreLess = function() {
  let invisibleText = document.getElementById("invisible-text");
  let btnText = document.getElementById("toggle-btn");

  if(invisibleText.style.display !== "none") {
    invisibleText.style.display = "none";
    btnText.innerHTML = "Show More";
  } else {
    invisibleText.style.display = "inline";
    btnText.innerHTML = "Show Less";
  }
}; 