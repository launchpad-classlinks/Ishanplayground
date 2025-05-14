const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
const buyCursorButton = document.getElementById('buyCursor');
const buyGrandmaButton = document.getElementById('buyGrandma');
const buyFarmButton = document.getElementById('buyFarm');
const buyFactoryButton = document.getElementById('buyFactory');
const buyMineButton = document.getElementById('buyMine');
const buyRocketButton = document.getElementById('buyRocket');
const buyPortalButton = document.getElementById('buyPortal');
const buyTimeMachineButton = document.getElementById('buyTimeMachine');

let cookies = 0;

let cursors = 0;
let grandmas = 0;
let farms = 0;
let factories = 0;
let mines = 0;
let rockets = 0;
let portals = 0;
let timeMachines = 0;

// Upgrade costs
const cursorCost = 10;
const grandmaCost = 100;
const farmCost = 500;
const factoryCost = 2000;
const mineCost = 1000;
const rocketCost = 5000;
const portalCost = 25000;
const timeMachineCost = 100000;

// Cookies per second for each upgrade
const cursorCps = 0.1;
const grandmaCps = 1;
const farmCps = 5;
const factoryCps = 25;
const mineCps = 25;
const rocketCps = 100;
const portalCps = 400;
const timeMachineCps = 1500;

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

buyMineButton.addEventListener('click', () => {
    if (cookies >= mineCost) {
        cookies -= mineCost;
        mines++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyRocketButton.addEventListener('click', () => {
    if (cookies >= rocketCost) {
        cookies -= rocketCost;
        rockets++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyPortalButton.addEventListener('click', () => {
    if (cookies >= portalCost) {
        cookies -= portalCost;
        portals++;
        updateCookieCount();
        updateUpgradeCosts();
    } else {
        alert("Not enough cookies!");
    }
});

buyTimeMachineButton.addEventListener('click', () => {
    if (cookies >= timeMachineCost) {
        cookies -= timeMachineCost;
        timeMachines++;
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
    buyMineButton.textContent = `Buy Mine - ${mineCost} Cookies (Owned: ${mines})`;
    buyRocketButton.textContent = `Buy Rocket - ${rocketCost} Cookies (Owned: ${rockets})`;
    buyPortalButton.textContent = `Buy Portal - ${portalCost} Cookies (Owned: ${portals})`;
    buyTimeMachineButton.textContent = `Buy Time Machine - ${timeMachineCost} Cookies (Owned: ${timeMachines})`;
}

// Game loop to automatically add cookies
setInterval(() => {
    cookies += cursors * cursorCps;
    cookies += grandmas * grandmaCps;
    cookies += farms * farmCps;
    cookies += factories * factoryCps;
    cookies += mines * mineCps;
    cookies += rockets * rocketCps;
    cookies += portals * portalCps;
    cookies += timeMachines * timeMachineCps;
    updateCookieCount();
}, 100);

// Initial update of upgrade costs
updateUpgradeCosts();
