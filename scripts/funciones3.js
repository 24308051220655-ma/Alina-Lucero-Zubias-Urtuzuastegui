function calcularLuz(){

    let kw =
    parseFloat(document.getElementById("kw").value);

    let pago = kw * 3;

    document.getElementById("resultado").textContent =
    "Total a pagar: $" + pago.toFixed(2);

}