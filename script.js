const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
const buyCursorButton = document.getElementById('buyCursor');
const buyGrandmaButton = document.getElementById('buyGrandma');
const buyFarmButton = document.getElementById('buyFarm');
const buyFactoryButton = document.getElementById('buyFactory');

let cookies = 0;

let cursors = 0;
let grandmas = 0;
let farms = 0;
let factories = 0;

// Upgrade costs
const cursorCost = 10;
const grandmaCost = 100;
const farmCost = 500;
const factoryCost = 2000;

// Cookies per second for each upgrade
const cursorCps = 0.1;
const grandmaCps = 1;
const farmCps = 5;
const factoryCps = 25;

cookie.addEventListener('click', () => {
    cookies++;
    updateCookieCount();
});

buyCursorButton.addEventListener('click', () => {
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cursors++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyGrandmaButton.addEventListener('click', () => {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyFarmButton.addEventListener('click', () => {
    if (cookies >= farmCost) {
        cookies -= farmCost;
        farms++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyFactoryButton.addEventListener('click', () => {
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        factories++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

function updateCookieCount() {
    cookieCountDisplay.textContent = `Cookies: ${cookies}`;
}

function updateUpgradeCosts() {
    buyCursorButton.textContent = `Buy Cursor - ${cursorCost} Cookies (Owned: ${cursors})`;
    buyGrandmaButton.textContent = `Buy Grandma - ${grandmaCost} Cookies (Owned: ${grandmas})`;
    buyFarmButton.textContent = `Buy Farm - ${farmCost} Cookies (Owned: ${farms})`;
    buyFactoryButton.textContent = `Buy Factory - ${factoryCost} Cookies (Owned: ${factories})`;
}

// Game loop to automatically add cookies
setInterval(() => {
    cookies += cursors * cursorCps;
    cookies += grandmas * grandmaCps;
    cookies += farms * farmCps;
    cookies += factories * factoryCps;
    updateCookieCount();
}, 100); // Update every 100 milliseconds (10 times per second)

// Initial update of upgrade costs
updateUpgradeCosts();
