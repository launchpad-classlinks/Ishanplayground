const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
let cookies = 0;

cookie.addEventListener('click', () => {
    cookies++;
    cookieCountDisplay.textContent = `Cookies: ${cookies}`;
});
