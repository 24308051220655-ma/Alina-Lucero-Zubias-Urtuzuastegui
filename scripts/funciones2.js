function calcularAgua(){

    let metros =
    parseFloat(document.getElementById("metros").value);

    let pago = metros * 12.50;

    document.getElementById("resultado").textContent =
    "Total a pagar: $" + pago.toFixed(2);

}