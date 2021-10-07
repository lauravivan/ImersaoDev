function convertToUSD() {
    let userValue = parseFloat(document.getElementById("user-value").value);
    let USD = userValue * 0.19;
    showOnScreen(userValue, "USD", USD);
}

function convertToEuro() {
    let userValue = parseFloat(document.getElementById("user-value").value);
    let euro = userValue * 0.16;
    showOnScreen(userValue, "€", euro);
}

function convertToWon() {
    let userValue = parseFloat(document.getElementById("user-value").value);
    let won = userValue * 223.53;
    showOnScreen(userValue, "₩", won);
}

function showOnScreen(real, coin, value) {
    let showOnScreen = document.getElementById("result");
    showOnScreen.innerText = `Com R$${real.toFixed(2)} você consegue comprar ${coin}${value.toFixed(2)}`;
}   