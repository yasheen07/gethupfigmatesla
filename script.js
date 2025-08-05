const menuBtn = document.getElementById('menu-btn');
const rightNav = document.querySelector('.right-nav');

menuBtn.addEventListener('click', () => {
    rightNav.classList.toggle('menu-open');
});