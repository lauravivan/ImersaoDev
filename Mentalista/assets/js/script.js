let secretNumber = parseInt(Math.random() * 101);
let tempts = 3;
let flag = 0;
let timesGifDefeat = 0;
let timesGifVictory = 0;

let listOfGifs = ["assets/img/main/abel-in-vegas.gif", "assets/img/main/dices.gif", "assets/img/main/spongebob-and-patrick.gif", "assets/img/main/jack-black.gif", "assets/img/main/sheldon.gif", "assets/img/main/dices-falling.gif", "assets/img/main/batman.gif", "assets/img/main/brain-work.gif", "assets/img/main/bring-it-on.gif", "assets/img/main/guns.gif", "assets/img/main/high-five.gif", "assets/img/main/i-dont-know.gif", "assets/img/main/james.gif", "assets/img/main/lets-do-this.gif", "assets/img/main/matrix.gif", "assets/img/main/maybe.gif", "assets/img/main/mickey-think.gif", "assets/img/main/poo-think.gif", "assets/img/main/sherlock-avaliating.gif", "assets/img/main/sherlock-screaming.gif", "assets/img/main/the-game-is-on.gif", "assets/img/main/the-office-party-2.gif", "assets/img/main/the-office-party.gif", "assets/img/main/think.gif", "assets/img/main/we-failed.gif"];

let gifsVictory = ["assets/img/victory/adventure-time.gif", "assets/img/victory/blue-blox.gif", "assets/img/victory/blue-penguin.gif", "assets/img/victory/happy-bear.gif", "assets/img/victory/happy-cat.gif", "assets/img/victory/happy-dog.gif", "assets/img/victory/happy-green-guy.gif", "assets/img/victory/happy.gif", "assets/img/victory/lego.gif", "assets/img/victory/lovely-cat.gif", "assets/img/victory/poo-happy.gif", "assets/img/victory/sad-cat.gif", "assets/img/victory/sponge-bob-excited.gif", "assets/img/victory/woman.gif"];

let gifsDefeat = ["assets/img/defeat/a-guy.gif", "assets/img/defeat/angry.gif", "assets/img/defeat/blue.gif", "assets/img/defeat/boy-boy.gif", "assets/img/defeat/boy.gif", "assets/img/defeat/bread.gif", "assets/img/defeat/bunny.gif", "assets/img/defeat/chicken.gif", "assets/img/defeat/crying.gif", "assets/img/defeat/eyes.gif", "assets/img/defeat/homer.gif", "assets/img/defeat/llama.gif", "assets/img/defeat/moe.gif", "assets/img/defeat/mushroom.gif", "assets/img/defeat/obama.gif", "assets/img/defeat/olaf.gif", "assets/img/defeat/robot.gif", "assets/img/defeat/sad-cat.gif", "assets/img/defeat/sad-girl.gif", "assets/img/defeat/sad-violin.gif", "assets/img/defeat/sad-weird-cat.gif", "assets/img/defeat/so-sad.gif", "assets/img/defeat/white.gif"];

function guess() {
    let userValue = parseInt(document.getElementById("user-value").value);

    while (tempts > 0 && flag == 0) {
        showGif();
        if (userValue == secretNumber) {
            timesGifVictory++;
            showResultOnScreen("Parabéns, você venceu!");
            showTemptsMsgOnScreen("");
            showGifVictory();
            flag = 1;
            break;
        } else if (userValue < 0 || userValue > 100) {
            showResultOnScreen("Digite um número entre 0 e 100");
            break;
        } else {
            if (userValue > secretNumber) {
                showResultOnScreen("Errou! Tente um número menor");
            } else {
                showResultOnScreen("Errou! Tente um número maior");
            }
            tempts--;
            if (tempts == 1) {
                showTemptsMsgOnScreen(`Você tem mais ${tempts} tentativa`);
            } else {
                showTemptsMsgOnScreen(`Você tem mais ${tempts} tentativas`);
            }
            break;
        }
    }
    endOfGame();
}

function showResultOnScreen(msg) {
    let showOnScreen = document.getElementById("result-msg");
    showOnScreen.innerText = msg;
}

function showTemptsMsgOnScreen(msg) {
    let showOnScreen = document.getElementById("tempts");
    showOnScreen.innerText = msg;
}

function showGif() {
    let drawNumber = parseInt(Math.random() * listOfGifs.length);
    let chosenGif = listOfGifs[drawNumber];
    document.getElementById("gif").innerHTML = `<img src="${chosenGif}">`;
}

function showGifVictory() {
    if (timesGifVictory == 1) {
        let drawNumber = parseInt(Math.random() * gifsVictory.length);
        let chosenGif = gifsVictory[drawNumber];
        document.getElementById("resultGif").innerHTML = `<img src="${chosenGif}">`;
    }
}

function showGifDefeat() {
    if (timesGifDefeat == 1) {
        let drawNumber = parseInt(Math.random() * gifsDefeat.length);
        let chosenGif = gifsDefeat[drawNumber];
        document.getElementById("resultGif").innerHTML = `<img src="${chosenGif}">`;
    }
}

function endOfGame() {
    if (tempts == 0) {
        timesGifDefeat++;
        showResultOnScreen(`Que pena, você já usou todas as tentativas. A resposta era ${secretNumber}.`);
        showTemptsMsgOnScreen("");    
        showGifDefeat();                              
    }
}