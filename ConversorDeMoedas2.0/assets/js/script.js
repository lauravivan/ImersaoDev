function convert() {
    let userValue = parseFloat(document.getElementById("user-value").value); 
    let radioButtons = ["radio-real", "radio-dolar", "radio-won", "radio-euro", "radio-peso-argentino"];
    let boxes = ["selector-real", "selector-dolar", "selector-won", "selector-euro", "selector-peso-argentino"];
    let checkedRadioButton;
    let selectedBox;

    for (let i = 0; i < radioButtons.length; i++) {
        if (document.getElementById(radioButtons[i]).checked) {
            checkedRadioButton = radioButtons[i];
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        if (document.getElementById(boxes[i]).selected) {
            selectedBox = boxes[i];
        }
    }

    if (checkedRadioButton == "radio-real") {
        convertFromReal(selectedBox, userValue);
    } else if (checkedRadioButton == "radio-dolar") {
        convertFromDolar(selectedBox, userValue);
    } else if (checkedRadioButton == "radio-won") {
        convertFromWon(selectedBox, userValue);
    } else if (checkedRadioButton == "radio-euro") {
        convertFromEuro(selectedBox, userValue);
    } else {
        convertFromPesoArgentino(selectedBox, userValue);
    }
}

function convertFromReal(selectedBox, userValue) {
    if (selectedBox == "selector-real") {
        message("R$", userValue, "R$", userValue);
    } else if (selectedBox == "selector-dolar") {
        let dolar = userValue * 0.19;
        message("R$", userValue, "USD", dolar);
    } else if (selectedBox == "selector-won") {
        let won = userValue * 223.51;
        message("R$", userValue, "₩", won);
    } else if (selectedBox == "selector-euro") {
        let euro = userValue * 0.16;
        message("R$", userValue, "€", euro);
    } else {
        let pesoArgentino = userValue * 18.58;
        message("R$", userValue, "ARS", pesoArgentino);
    }
}

function convertFromDolar(selectedBox, userValue) {
    if (selectedBox == "selector-dolar") {
        message("USD", userValue, "USD", userValue);
    } else if (selectedBox == "selector-real") {
        let real = userValue * 5.29;
        message("USD", userValue, "R$", real);
    } else if (selectedBox == "selector-won") {
        let won = userValue * 1182.02;
        message("USD", userValue, "₩", won);
    } else if (selectedBox == "selector-euro") {
        let euro = userValue * 0.85;
        message("USD", userValue, "€", euro);
    } else {
        let pesoArgentino = userValue * 98.29;
        message("USD", userValue, "ARS", pesoArgentino);
    }
}

function convertFromWon(selectedBox, userValue) {
    if (selectedBox == "selector-won") {
        message("₩", userValue, "₩", userValue);
    } else if (selectedBox == "selector-real") {
        let real = userValue * 0.0045;
        message("₩", userValue, "R$", real);
    } else if (selectedBox == "selector-dolar") {
        let dolar = userValue * 0.00085;
        message("₩", userValue, "USD", dolar);
    } else if (selectedBox == "selector-euro") {
        let euro = userValue * 0.00072;
        message("₩", userValue, "€", euro);
    } else {
        let pesoArgentino = userValue * 0.083;
        message("₩", userValue, "ARS", pesoArgentino);
    }
}

function convertFromEuro(selectedBox, userValue) {
    if (selectedBox == "selector-euro") {
        message("€", userValue, "€", userValue);
    } else if (selectedBox == "selector-real") {
        let real = userValue * 6.20;
        message("€", userValue, "R$", real);
    } else if (selectedBox == "selector-dolar") {
        let dolar = userValue * 1.17;
        message("€", userValue, "USD", dolar);
    } else if (selectedBox == "selector-won") {
        let won = userValue * 1386.02;
        message("€", userValue, "₩", won);
    } else {
        let pesoArgentino = userValue * 115.25;
        message("€", userValue, "ARS", pesoArgentino);
    }
}

function convertFromPesoArgentino(selectedBox, userValue) {
    if (selectedBox == "selector-peso-argentino") {
        message("ARS", userValue, "ARS", userValue);
    } else if (selectedBox == "selector-real") {
        let real = userValue * 0.054;
        message("ARS", userValue, "R$", real);
    } else if (selectedBox == "selector-dolar") {
        let dolar = userValue * 0.010;
        message("ARS", userValue, "USD", dolar);
    } else if (selectedBox == "selector-euro") {
        let euro = userValue * 0.0087;
        message("ARS", userValue, "€", euro);
    } else {
        let won = userValue * 12.03;
        message("ARS", userValue, "₩", won);
    }
}

function message(coin, value, secondCoin, result) {
    let h2 = document.getElementById("show-on-screen");
    h2.innerText = `${coin}${value.toFixed(2)} equivale a ${secondCoin}${result.toFixed(2)}`;
}