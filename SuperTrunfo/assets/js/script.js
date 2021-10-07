let cards = [
    {
        name: "Scott Pilgrim",
        atributes: {strength: 90, intelligence: 70,  powers: 60, sarcasm: 70, wit: 100, "chilling vibes": 40, "dance fighting": 90},
        img: "assets/img/scott.jpg"
    },
    {
        name: "Ramona Flowers",
        atributes: {strength: 90, intelligence: 90, powers: 70, sarcasm: 40, wit: 40, "chilling vibes": 60, "dance fighting": 0},
        img: "assets/img/ramona.jpg"
    },
    {
        name: "Wallace",
        atributes: {strength: 20, intelligence: 100, powers: 0, sarcasm: 100, wit: 100, "chilling vibes": 70, "dance fighting": 0},
        img: "assets/img/wallace.png"
    },
    {
        name: "Knives Chau",
        atributes: {strength: 90, intelligence: 70, powers: 0, sarcasm: 0, wit: 10, "chilling vibes": 0, "dance fighting": 100},
        img: "assets/img/knives.jpg"
    },
    {
        name: "Kim",
        atributes: {strength: 50, intelligence: 90, powers: 0, sarcasm: 70, wit: 80, "chilling vibes": 40, "dance fighting": 0},
        img: "assets/img/kim.jpg"
    },
    {
        name: "Young Neil",
        atributes: {strength: 30, intelligence: 40, powers: 0, sarcasm: 10, wit: 0, "chilling vibes": 100, "dance fighting": 0},
        img: "assets/img/neil.jpg"
    },
    {
        name: "Stephen",
        atributes: {strength: 60, intelligence: 80, powers: 0, sarcasm: 60, wit: 20, "chilling vibes": 10, "dance fighting": 0},
        img: "assets/img/stephen.jpg"
    },
    {
        name: "Envy Adams",
        atributes: {strength: 90, intelligence: 90, powers: 60, sarcasm: 80, wit: 70, "chilling vibes": 0, "dance fighting": 0},
        img: "assets/img/envy.jpg"
    },
    {
        name: "Lucas Lee",
        atributes: {strength: 100, intelligence: 50, powers: 0, sarcasm: 80, wit: 0, "chilling vibes": 40, "dance fighting": 0},
        img: "assets/img/lucas.jpg"
    },
    {
        name: "Todd",
        atributes: {strength: 100, intelligence: 40, powers: 100, sarcasm: 70, wit: 0, "chilling vibes": 0, "dance fighting": 0},
        img: "assets/img/todd.jpg"
    },
    {
        name: "Matthew Patel",
        atributes: {strength: 80, intelligence: 70, powers: 100, sarcasm: 0, wit: 0, "chilling vibes": 0, "dance fighting": 100},
        img: "assets/img/matthew.jpg"
    },
    {
        name: "Roxy",
        atributes: {strength: 90, intelligence: 80, powers: 50, sarcasm: 30, wit: 0, "chilling vibes": 0, "dance fighting": 0},
        img: "assets/img/roxy.jpg"
    },
    {
        name: "Stacey Pilgrim",
        atributes: {strength: 0, intelligence: 70, powers: 0, sarcasm: 100, wit: 70, "chilling vibes": 60, "dance fighting": 0},
        img: "assets/img/stacey.jpg"
    },
    {
        name: "Nega Scott",
        atributes: {strength: 90, intelligence: 70, powers: 80, sarcasm: 70, wit: 100, "chilling vibes": 40, "dance fighting": 90},
        img: "assets/img/nega-scott.jpg"
    },
    {
        name: "Gideon",
        atributes: {strength: 100, intelligence: 100, powers: 100, sarcasm: 100, wit: 40, "chilling vibes": 20, "dance fighting": 0},
        img: "assets/img/gideon.jpg"
    },
];

let computerCard;
let userCard;

function raffleCard() {
    let divUserCard = document.getElementById("user-card");
    let titleElement = document.getElementById("title");

    computerCard = cards[parseInt(Math.random() * 14)];
    let temporaryUserCard = cards[parseInt(Math.random() * 14)];

    while (computerCard == temporaryUserCard) {
        temporaryUserCard = cards[parseInt(Math.random() * 14)];
    }   
    userCard = temporaryUserCard;
    
    titleElement.innerText = "Sua carta:";
    divUserCard.innerHTML = `<h2 id="user-card-name">${userCard.name}</h2>
                            <img id="user-card-img" src="${userCard.img}">`;

    for (let atribute in userCard.atributes) {
        divUserCard.innerHTML += `<p id="user-card-atribute">${atribute}: ${userCard.atributes[atribute]}</p>`;
    }

    document.getElementById("btnRaffle").disabled = true;
    document.getElementById("btnPlay").disabled = false;
    showOptions();
}

function showOptions() {
    let divOptions = document.getElementById("options");

    for(let atribute in userCard.atributes) {
        divOptions.innerHTML += `<input type="radio" name="radio" class="radio" value="${atribute}">${atribute}`;
    }
}

function discoverSelectedRadio() {
    let radioOptions = document.getElementsByName("radio");

    for(let i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked) {
            return radioOptions[i].value;
        }
    }
}

function toPlay() {
    let userChoice = discoverSelectedRadio();

    for (let atribute in computerCard.atributes) {
        if(atribute == userChoice) {
            if (computerCard.atributes[atribute] > userCard.atributes[atribute]) {
                showResultOnScreen("VOCÊ PERDEU!");
            } else if (computerCard.atributes[atribute] < userCard.atributes[atribute]) {
                showResultOnScreen("PARABÉNS, VOCÊ VENCEU!");
            } else {
                showResultOnScreen("EMPATE!");
            }
        }
    }
}

function showResultOnScreen(msg) {
    let divComputerCard = document.getElementById("computer-card");
    let titleElement = document.getElementById("title");
    let xElement = document.getElementById("card-vs-card");
    titleElement.innerText = msg;
    xElement.innerText = "X";

    divComputerCard.innerHTML += `<h2 id="computer-card-name">${computerCard. name}</h2>
    <img id="computer-card-img" src="${computerCard.img}">`;

    for (let atribute in computerCard.atributes) {
        divComputerCard.innerHTML += `<p id="computer-card-atribute">${atribute}: ${computerCard.atributes[atribute]}</p>`;
    }
    document.getElementById("btnPlay").disabled = true;
    document.getElementById("btnTryAgain").disabled = false;
}

function tryAgain() {
    location.reload();  
}