function convertToYL() {
    let userValue = parseFloat(document.getElementById('user-value').value);
    let yL = (userValue/9.461e+12);
    let showOnScreen = document.getElementById('result');
    showOnScreen.innerText = `${userValue}km equivale a ${yL}yl`;
}