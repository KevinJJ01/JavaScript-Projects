function obtenerDolares() {

    var totalDolares = document.getElementById("dolares").value;
  
    let valorDolar = 3970;
  
    const total = totalDolares * valorDolar;
  
    document.getElementById("resultado").innerText = "Total en pesos Colombianos: " + total +"$";

}


function obtenerEuros() {

    var totalEuros = document.getElementById("euros").value;
  
    let valorEuro = 4178;
  
    const total = totalEuros * valorEuro;
  
    document.getElementById("resultado-2").innerText = "Total en pesos Colombianos: " + total +"$";

}