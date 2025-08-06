const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    backdrop.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    backdrop.classList.remove('active');
});

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    backdrop.classList.remove('active');
});