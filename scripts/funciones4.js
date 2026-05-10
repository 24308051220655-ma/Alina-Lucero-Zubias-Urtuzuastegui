function calcularTotal(){
    
    let precio =
    parseFloat(document.getElementById("precio").value);
    let descuento = precio * 0.20;
    let precioDescuento = precio - descuento;
    let iva = precioDescuento * 0.15;
    let precioFinal = precioDescuento + iva;
    document.getElementById("resultado").innerHTML =
    "Precio con descuento: $" +
    precioDescuento.toFixed(2) +
    "<br>Precio final: $" +
    precioFinal.toFixed(2);

}