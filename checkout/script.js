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
  