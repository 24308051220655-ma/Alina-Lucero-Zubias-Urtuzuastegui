function calcularCheque(){
    let dias =
    parseFloat(document.getElementById("dias").value);
    let hotel =
    parseFloat(document.getElementById("hotel").value);
    let comida =
    parseFloat(document.getElementById("comida").value);
    let totalHotel = hotel * dias;
    let totalComida = comida * dias;
    let otrosGastos = dias * 100;
    let totalCheque =
    totalHotel + totalComida + otrosGastos;
    document.getElementById("resultado").innerHTML =
    "Hotel: $" + totalHotel.toFixed(2) +
    "<br>Comida: $" + totalComida.toFixed(2) +
    "<br>Otros gastos: $" + otrosGastos.toFixed(2) +
    "<br><br>Total del cheque: $" +
    totalCheque.toFixed(2);

}