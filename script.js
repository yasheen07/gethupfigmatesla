
const cookieConsent = document.getElementById('cookie-consent');
const cookieAccept = document.getElementById('cookie-accept');

if (!localStorage.getItem('cookie-accepted')) {
    setTimeout(() => {
        cookieConsent.classList.add('active');
    }, 2000);
}

cookieAccept.addEventListener('click', () => {
    cookieConsent.classList.remove('active');
    localStorage.setItem('cookie-accepted', 'true');
});
