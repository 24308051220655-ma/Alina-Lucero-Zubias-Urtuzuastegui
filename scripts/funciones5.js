function calcularAhorro(){
    let sueldo =
    parseFloat(document.getElementById("sueldo").value);
    let ahorroSemanal = sueldo * 0.15;
    let ahorroMensual = ahorroSemanal * 4;
    let ahorroAnual = ahorroMensual * 12;
    document.getElementById("resultado").textContent =
    "Ahorro anual: $" + ahorroAnual.toFixed(2);

}