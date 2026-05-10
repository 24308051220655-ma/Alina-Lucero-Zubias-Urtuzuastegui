function calcularLlamada(){
    let minutos =
    parseFloat(document.getElementById("minutos").value);
    let costo =
    parseFloat(document.getElementById("costo").value);
    let total = minutos * costo;
    document.getElementById("resultado").textContent =
    "Costo total: $" + total.toFixed(2);

}