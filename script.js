const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const rightNav = document.querySelector('.right-nav');

menuBtn.addEventListener('click', () => {
    rightNav.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
    rightNav.classList.remove('menu-open');
});
