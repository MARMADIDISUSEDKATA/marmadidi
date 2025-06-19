
let fame = 0;
let level = 1;
let username = "";

const fameDisplay = document.getElementById("fame");
const levelDisplay = document.getElementById("level");
const rankDisplay = document.getElementById("rank");

const ranks = [
    { min: 1, max: 9, title: "Nova" },
    { min: 10, max: 19, title: "Kardarshki" },
    { min: 20, max: 29, title: "Lenor" },
    { min: 30, max: 39, title: "Lenor" },
    { min: 40, max: 49, title: "Pachkata" },
    { min: 50, max: 59, title: "Milionera" },
    { min: 60, max: 140, title: "THE SUSEDKA" }
];

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user && pass) {
        username = user;
        document.getElementById("login").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("userDisplay").textContent = username;
    } else {
        alert("Please enter both a username and password!");
    }
}

function playGame() {
    fame++;
    fameDisplay.textContent = fame;

    level = Math.floor(fame / 1000) + 1;
    levelDisplay.textContent = level;

    const currentRank = ranks.find(rank => level >= rank.min && level <= rank.max);
    rankDisplay.textContent = currentRank ? currentRank.title : "Legend";
}
