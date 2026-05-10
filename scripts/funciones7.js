function calcularPotencia(){
    let R =
    parseFloat(document.getElementById("resistencia").value);
    let I =
    parseFloat(document.getElementById("corriente").value);
    let V = R * I;
    let P = V * I;
    document.getElementById("resultado").innerHTML =
    "Voltaje (V): " + V.toFixed(2) +
    "<br>Potencia (P): " + P.toFixed(2);

}