document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu');

    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
    });
});
