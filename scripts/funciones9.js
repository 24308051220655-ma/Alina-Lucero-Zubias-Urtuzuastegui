function calcularPromedio(){
    let ex1 =
    parseFloat(document.getElementById("ex1").value);
    let ex2 =
    parseFloat(document.getElementById("ex2").value);
    let ex3 =
    parseFloat(document.getElementById("ex3").value);
    let promedio =
    (ex1 * 0.25) +
    (ex2 * 0.25) +
    (ex3 * 0.50);
    document.getElementById("resultado").textContent =
    "Promedio final: " + promedio.toFixed(2);

}