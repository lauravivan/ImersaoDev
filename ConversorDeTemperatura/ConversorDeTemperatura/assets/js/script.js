function convertCelsius() {
    let userValue = parseFloat(document.getElementById("value-celsius").value);
    clean("value-celsius");

    let kelvin = userValue + 273.15;
    let fahrenheit = (userValue * 1.8) + 32;

    showOnScreen(`${userValue.toFixed(2)}ºC equivale a ${kelvin.toFixed(2)}K e ${fahrenheit.toFixed(2)}ºF`);
}

function convertKelvin() {
    let userValue = parseFloat(document.getElementById("value-kelvin").value);
    clean("value-kelvin");

    let celsius = userValue - 273.15;
    let fahrenheit = ((userValue - 273) * 1.8) + 32;

    showOnScreen(`${userValue.toFixed(2)}K equivale a ${celsius.toFixed(2)}ºC e ${fahrenheit.toFixed(2)}ºF`);
}

function convertFahrenheit() {
    let userValue = parseFloat(document.getElementById("value-fahrenheit").value);
    clean("value-fahrenheit");

    let celsius = (userValue - 32) / 1.8;
    let kelvin = (((userValue - 32) * 5)/9) + 273.15;

    showOnScreen(`${userValue.toFixed(2)}ºF equivale a ${celsius.toFixed(2)}ºC e ${kelvin.toFixed(2)}K`);
}

function showOnScreen(msg) {
    document.getElementById("result").innerText = msg;
}

function clean(input) {
    document.getElementById(input).value = "";
}