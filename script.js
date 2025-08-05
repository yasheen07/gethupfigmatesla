const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');

const openMenu = () => {
    backdrop.classList.add('active');
    mobileNav.classList.add('active');
};

const closeMenu = () => {
    backdrop.classList.remove('active');
    mobileNav.classList.remove('active');
};

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);