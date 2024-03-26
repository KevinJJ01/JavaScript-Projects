function convertirCelcius(){
    var totalKelvin = document.getElementById("kelvin").value;

    const total= totalKelvin - 273;

    document.getElementById("resultado").innerText = "Total en Celsius: " + total +"C";
}