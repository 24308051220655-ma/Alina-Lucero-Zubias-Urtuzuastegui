function calcularArea(){
    let lado =
    parseFloat(document.getElementById("lado").value);
    let area = lado * lado;
    document.getElementById("resultado").textContent =
    "Área del cuadrado: " + area.toFixed(2);

}