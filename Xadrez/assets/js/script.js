players = [];
biggerOne = -1;

function register() {
    let clean = document.getElementById("player-name");
    if (/\S/.test(document.getElementById("player-name").value)) {
        let obj = {
            name: document.getElementById("player-name").value,
            victories: 0,
            draws: 0,
            defeats: 0,
            score: 0
        }
        players.push(obj);
        clean.value = "";
        showOnScreen();
    }
}

function showOnScreen() {
    let table = document.getElementById("playersTable");
    let tableElements = "";
    for (i = 0; i < players.length; i++) {
        tableElements += "<tr><td class='ganhador'>" + players[i].name + "</td>";
        tableElements += "<td>" + players[i].victories + "</td>";
        tableElements += "<td>" + players[i].draws + "</td>";
        tableElements += "<td>" + players[i].defeats + "</td>";
        tableElements += "<td>" + players[i].score + "</td></tr>";

        table.innerHTML = tableElements;
    }
}

function player1Won() {
    let player1 = document.getElementById("input-player1").value;
    let player2 = document.getElementById("input-player2").value;
    validate(player1, player2);
}

function player2Won() {
    let player1 = document.getElementById("input-player1").value;
    let player2 = document.getElementById("input-player2").value;
    validate(player2, player1);
}

function validate(player, otherPlayer) {
    let flag = 0;
    for (let i = 0; i < players.length; i++) {
        if (player == players[i].name) {
            flag++;
        }
        if (otherPlayer == players[i].name) {
            flag++;
        }
        if (flag == 2) {
            addVictory(player, otherPlayer);
        }
    }
}

function addVictory(winnerName, loserName) {
    for (i = 0; i < players.length; i++) {
        if (players[i].name.toUpperCase() == winnerName.toUpperCase()) {
            players[i].victories += 1;
            players[i].score += 3;
        } 
        if (players[i].name.toUpperCase() == loserName.toUpperCase()) {
            players[i].defeats += 1;
        }
    }
    showOnScreen();
    updateWinner();
}

function addDraw() {
    let player1 = document.getElementById("input-player1").value;
    let player2 = document.getElementById("input-player2").value;
    let flag = 0;
    for (let i = 0; i < players.length; i++) {
        if (player1 == players[i].name) {
            flag++;
        }
        if (player2 == players[i].name) {
            flag++;
        }
        if (flag == 2) {
            for (i = 0; i < players.length; i++) {
                if ((players[i].name.toUpperCase() == player1.toUpperCase()) || players[i].name.toUpperCase() == player2.toUpperCase()) {
                    players[i].draws += 1;
                    players[i].score += 1;
                } 
            }
            showOnScreen();
        }
    }
}

function updateWinner() {
    let element = document.getElementById("winner");
    for (i = 0; i < players.length; i++) {
        if(players[i].victories > biggerOne) {
            biggerOne = players[i].victories;
            element.innerHTML = "";
            element.innerHTML += "<br>" + players[i].name.toUpperCase();
        }
    }
}