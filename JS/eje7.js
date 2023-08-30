function calculaPago() {
  let nombre = document.getElementById("vendedor").value;
  var cochesVendidos = parseFloat(document.getElementById("autos").value);

  var sueldo_bruto = 350 + cochesVendidos * 15;
  if (cochesVendidos > 15) {
    sueldo_bruto += 40;
  }
  
  var impuesto = 0.25 * sueldo_bruto;
  var sueldo_neto = sueldo_bruto - impuesto;
  
  document.getElementById("ejer7").innerHTML = "Nombre del vendedor: " + nombre +
  "<br>Sueldo Bruto: $" + sueldo_bruto +
  "<br>Impuesto: $" + impuesto +
  "<br>Sueldo neto: $" + sueldo_neto;
}
