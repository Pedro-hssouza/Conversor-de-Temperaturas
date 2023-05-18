function converterTemperaturas() {
    var temperatura = parseFloat(document.getElementById("tempInput").value);

    if (isNaN(temperatura)) {
        document.getElementById("resultados").innerHTML = "Insira um valor válido.";
        document.body.style.backgroundColor = "";
        return;
    }

    var resultadoCelsius = temperatura.toFixed(2) + "°C";
    var resultadoFahrenheit = ((temperatura * 9 / 5) + 32).toFixed(2) + "°F";
    var resultadoKelvin = (temperatura + 273.15).toFixed(2) + "K";

    document.getElementById("resultados").innerHTML = "Resultados:<br>" +
        "Celsius: " + resultadoCelsius + "<br>" +
        "Fahrenheit: " + resultadoFahrenheit + "<br>" +
        "Kelvin: " + resultadoKelvin;

    alterarCorFundo(temperatura);
}

function alterarCorFundo(temperatura) {
    var red = 0;
    var green = 0;
    var blue = 0;

    if (temperatura < -40) {
        blue = 150;
        red = 75;
    } else if (temperatura < -20) {
        blue = 255;
    } else if (temperatura < -10) {
        blue = 150;
    } else if (temperatura < 0) {
        blue = 100;
    } else if (temperatura < 10) {
        green = 100;
        blue = 100;
    } else if (temperatura < 20) {
        green = 200;
    } else if (temperatura < 30) {
        green = 255;
    } else if (temperatura < 50) {
        red = 255;
        green = 165;
    } else if (temperatura < 85) {
        red = 255;
        green = 69;
    } else {
        red = 255;
    }


    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}
