function calcularTiempo(){
    let edad =
    parseFloat(document.getElementById("edad").value);
    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;
    document.getElementById("resultado").innerHTML =
    "Meses vividos: " + meses +
    "<br>Semanas vividas: " + semanas +
    "<br>Días vividos: " + dias +
    "<br>Horas vividas: " + horas;

}