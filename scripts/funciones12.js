function calcularHotel(){
    let dias =
    parseFloat(document.getElementById("dias").value);
    let costo =
    parseFloat(document.getElementById("costo").value);
    let total = dias * costo;
    document.getElementById("resultado").textContent =
    "Total a pagar: $" + total.toFixed(2);

}